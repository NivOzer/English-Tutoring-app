import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {};

const EditScreen = (props: Props) => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowForm(!showForm)}
      >
        <Ionicons name="add-circle" size={50} color="#54c85e" />
      </TouchableOpacity>
      {showForm && (
        <>
          <Input Label="שם:" />
          <Input Label="שעה:" />
          <Input Label="תאריך:" />
          <Input Label="נייד:" />
          <Input Label="נייד הורה:" />
          <Input Label="חומרים לשיעור:" />
        </>
      )}
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
  addButton: {
    marginBottom: "5%",
  },
});
