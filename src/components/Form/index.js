import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
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
    setModalState(state);
  };

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (height !== null && weight !== null) {
      setHeight(null);
      setWeight(null);
      imcCalculator();
      setMessage("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      setModalState(true);
      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessage("Os campos peso e/ou altura não podem estar vazios!!");
    setModalState(true);
  }

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.boxForm}>
        <View style={styles.form}>
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => validationImc()}
          >
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
    </Pressable>
  );
}
