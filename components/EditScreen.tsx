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
        style={styles.button}
        onPress={() => setShowForm(!showForm)}
      >
        <Ionicons name="add-circle" size={60} color="#99cccccc" />
        <Text style={styles.buttonText}>הוסף שיעור:</Text>
      </TouchableOpacity>
      {showForm && (
        <>
          <Input Label="שם:" />
          <Input Label="שעה:" />
          <Input Label="תאריך:" />
          <Input Label="נייד:" />
          <Input Label="נייד הורה:" />
          <Input Label="חומרים לשיעור:" />
          <TouchableOpacity style={styles.addLessonButton}>
            <Text style={styles.addLessonButtonText}>הוספה</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={styles.button}>
        <Ionicons name="create" size={60} color="#99cccccc" />
        <Text style={styles.buttonText}>ערוך שיעור:</Text>
      </TouchableOpacity>
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
  button: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "5%",
    width: "50%",
    height: "10%",
    justifyContent: "space-evenly",
    // backgroundColor: "yellow",
  },
  buttonText: {
    fontSize: 20,
  },
  addLessonButton: {
    width: "60%",

    backgroundColor: "rgba(40, 150, 40, 0.5)", // Background color with opacity
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)", // Border color with opacity
    shadowColor: "#000",
    padding: "3.5%",
    alignContent: "center",
    margin: "3%",
  },
  addLessonButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
