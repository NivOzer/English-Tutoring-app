import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
type LessonData = {
  name: string;
  time: string;
  weekDay: string;
  phone: string;
  parentPhone: string;
  materials: string[]; // Assuming materials is a string
};
type Props = {
  addLesson: (newLesson: LessonData) => void; // Define the type of addLesson
  data: LessonData[];
};

const EditScreen = ({ addLesson, data }: Props) => {
  console.log(data);

  const [showForm, setShowForm] = React.useState(false);
  const [selectLessonShow, setSelectLessonShow] = React.useState(false);
  const [lessonData, setLessonData] = useState({
    name: "",
    time: "",
    weekDay: "",
    phone: "",
    parentPhone: "",
    materials: "",
  });

  const handleInputChange = (label: string, value: string) => {
    setLessonData((prevLessonData) => ({
      ...prevLessonData,
      [label]: value,
    }));
  };

  const handleSubmit = () => {
    // Constructing new lesson object
    const newLesson = {
      name: lessonData.name,
      time: lessonData.time,
      weekDay: lessonData.weekDay,
      phone: lessonData.phone,
      parentPhone: lessonData.parentPhone,
      materials: lessonData.materials
        .split(",")
        .map((material) => material.trim()), // Splitting materials string into an array
    };

    console.log("New Lesson:", newLesson);
    addLesson(newLesson);
    // You can perform additional actions here, such as sending the data to a server or updating local storage.
  };

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
          <Input
            Label="שם:"
            onChangeText={(value) => handleInputChange("name", value)}
          />
          <Input
            Label="שעה:"
            onChangeText={(value) => handleInputChange("time", value)}
          />
          <Input
            Label="תאריך:"
            onChangeText={(value) => handleInputChange("weekDay", value)}
          />
          <Input
            Label="נייד:"
            onChangeText={(value) => handleInputChange("phone", value)}
          />
          <Input
            Label="נייד הורה:"
            onChangeText={(value) => handleInputChange("parentPhone", value)}
          />
          <Input
            Label="חומרים לשיעור:"
            onChangeText={(value) => handleInputChange("material", value)}
          />
          <TouchableOpacity
            style={styles.addLessonButton}
            onPress={handleSubmit}
          >
            <Text style={styles.addLessonButtonText}>הוספה</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelectLessonShow(!selectLessonShow)}
      >
        <Ionicons name="create" size={60} color="#99cccccc" />
        <Text style={styles.buttonText}>ערוך שיעור:</Text>
      </TouchableOpacity>
      {/* SelectDropdown */}
      {selectLessonShow && (
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                {selectedItem && (
                  <Icon
                    name={selectedItem.icon}
                    style={styles.dropdownButtonIconStyle}
                  />
                )}
                <Icon
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  style={styles.dropdownButtonArrowStyle}
                />
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || "בחר שיעור"}
                </Text>
              </View>
            );
          }}
          renderItem={(lesson, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{lesson.name}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      )}
    </View>
  );
};

// const addToLessons = async (newLesson: Lesson) => {};

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
  // Select DropDown
  dropdownButtonStyle: {
    width: "60%",
    padding: "3.5%",
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    color: "#151E26",
    textAlign: "right",
    marginEnd: "5%",
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
  },
  dropdownButtonIconStyle: {
    fontSize: 20,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
    padding: "3.5%",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
