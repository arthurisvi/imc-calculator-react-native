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
      {props.historic ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalState}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => {
              props.passStateModal(false);
            }}
          >
            <View style={styles.modal}>
              <Text style={styles.text}>Teste</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  props.passStateModal(false);
                }}
              >
                <Text style={styles.text}>OK</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : (
        <Modal
          animationType="fade"
          transparent={true}
          visible={props.modalState}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => {
              props.passStateModal(false);
            }}
          >
            <View style={styles.modal}>
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
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}
