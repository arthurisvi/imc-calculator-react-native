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
  const [historic, setHistoric] = useState(false);

  const passStateModal = (state) => {
    setModalState(state);
  };

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    setHistoric(false);
    if (height !== null && weight !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessage("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      setModalState(true);
    } else {
      setImc(null);
      setTextButton("Calcular");
      setMessage("Os campos peso e/ou altura não podem estar vazios!!");
      setModalState(true);
    }
  }

  function openModalContentHistoric() {
    setHistoric(true);
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => openModalContentHistoric()}
          >
            <Text style={styles.textButton}>Ver histórico</Text>
          </TouchableOpacity>
        </View>
        {modalState ? (
          <Modal
            passStateModal={passStateModal}
            historic={historic}
            message={message}
            result={imc}
          />
        ) : (
          <View></View>
        )}
      </View>
    </Pressable>
  );
}
