import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

type Props = {
  Label: string;
  onChangeText: (value: string) => void;
};

const Input = (props: Props) => {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.InputText}
        placeholder={props.Label}
        placeholderTextColor="black"
        onChangeText={props.onChangeText}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with opacity
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)", // Border color with opacity
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0.1,
    padding: "3.5%", // Use a specific value for padding instead of a percentage
    margin: "1%", // Use a specific value for margin instead of a percentage
    width: "60%",
    justifyContent: "space-between",
  },
  InputText: {
    fontSize: 20,
    width: "100%",
    justifyContent: "center", //vertical allignment
    textAlign: "right",
  },
});
