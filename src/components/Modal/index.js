import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./style";

export default function (props) {
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={props.modalState}>
        <View style={styles.modalContainer}>
          <Text style={styles.text}>{props.message}</Text>
          <Text style={styles.text}>{props.result}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.passStateModal(false);
            }}
          >
            <Text style={styles.text}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
