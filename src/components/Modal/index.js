import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function (props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é de: " + props.result,
    });
  };
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
          {props.result !== null ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onShare();
              }}
            >
              <Text style={styles.text}>Compartilhar</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
      </Modal>
    </View>
  );
}
