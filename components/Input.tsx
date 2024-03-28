import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

type Props = {
  Label: string;
};

const Input = (props: Props) => {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.InputText}
        placeholder={props.Label}
        placeholderTextColor="white"
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#b8c4d6",
    padding: "3%",
    borderRadius: 10,
    width: "50%",
    height: "6%",
    margin: "1%",
    alignItems: "center",
  },
  InputText: {
    fontSize: 20,
    width: "100%",
    justifyContent: "center", //vertical allignment
    textAlign: "right",
  },
});
