import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import Ionicons from "react-native-vector-icons/Ionicons";
type Props = {};

const EditScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Input Label="הוסף שם" />
      <Input Label="" />
      <Input Label="" />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef5ff",
  },
});
