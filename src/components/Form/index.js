import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Modal from "../Modal";

import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [message, setMessage] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [modalState, setModalState] = useState(false);

  const passStateModal = (state) => {
    if (state === false) {
      setHeight("");
      setWeight("");
    }
    setModalState(state);
  };

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (height !== null && weight !== null) {
      imcCalculator();
      setMessage("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      setModalState(true);
      setHeight(null);
      setWeight(null);
      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessage("Os campos peso e/ou altura não podem estar vazios!!");
    setModalState(true);
  }

  return (
    <View style={styles.boxForm}>
      <View style={styles.form}>
        {/* <Text>Altura</Text> */}
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Altura (ex: 1.65)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Peso (ex: 65.5)"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={() => validationImc()}>
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        modalState={modalState}
        passStateModal={passStateModal}
        message={message}
        result={imc}
      />
    </View>
  );
}
