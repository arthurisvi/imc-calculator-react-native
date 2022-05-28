import React from "react";
import { View, Text } from "react-native";

export default function Result(props) {
  return (
    <View>
      <Text>{props.message}</Text>
      <Text>{props.result}</Text>
    </View>
  );
}
