import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Linking,
} from "react-native";
import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
type Props = {
  name: String;
  time: String;
  weekDay: String;
  phone: String;
  parentPhone: String;
  material: string[];
};

const Lesson = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.time}</Text>
        <Text style={styles.text}>{props.weekDay}</Text>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <StudentDetails
        name={props.name}
        time={props.time}
        weekDay={props.weekDay}
        phone={props.phone}
        parentPhone={props.parentPhone}
        material={props.material}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </TouchableOpacity>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  // container:{
  //   flexDirection:"row",
  //   backgroundColor:"#F8F8FF",
  //   width:'60%',
  //   justifyContent:"space-between",
  //   padding:"4%",
  //   margin:"0.7%",
  // },
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with opacity
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)", // Border color with opacity
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0.1,
    padding: "3.6%", // Use a specific value for padding instead of a percentage
    margin: 7, // Use a specific value for margin instead of a percentage
    width: "60%",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 20,
    color: "black",
  },
});
