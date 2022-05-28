import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Result from "../Result";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [message, setMessage] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (height !== null && weight !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessage("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessage("Preencha o peso e altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="1.65"
          keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="65.5"
          keyboardType="numeric"
        />

        <Button onPress={() => validationImc()} title={textButton}></Button>
      </View>

      <Result message={message} result={imc} />
    </View>
  );
}
