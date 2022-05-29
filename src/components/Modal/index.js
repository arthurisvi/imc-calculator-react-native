import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Share,
  FlatList,
} from "react-native";
import styles from "./style";

export default function (props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é de: " + props.result,
    });
  };

  const newImcList = props.imcList.map((item) => {
    return {
      ...item,
      date: dateFormatter(item.date),
    };
  });

  function dateFormatter(date) {
    return (
      new Date(date).getDate() +
      "/" +
      new Date(date).getMonth() +
      "/" +
      new Date(date).getFullYear()
    );
  }

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
              {props.imcList.length !== 0 ? (
                <FlatList
                  style={styles.listContainer}
                  data={newImcList.reverse()}
                  renderItem={(item) => {
                    return (
                      <Text style={styles.text}>
                        <Text style={styles.textDate}>
                          [{item.item.date}]:{" "}
                        </Text>
                        {item.item.imc}
                      </Text>
                    );
                  }}
                ></FlatList>
              ) : (
                <Text>No momento, você não possui medições de IMC.</Text>
              )}

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
              <View style={styles.modalContent}>
                <Text style={styles.text}>{props.message}</Text>
                {props.result ? (
                  <Text style={styles.textResult}>{props.result}</Text>
                ) : (
                  <View></View>
                )}
              </View>
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
