import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Lesson from "./components/Lesson";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Lesson
        name="איילון"
        time="17:00"
        weekDay="ראשון"
        phone="54-884-1196"
        parentPhone="541111111"
      />
      <Lesson
        name="אריאל"
        time="17:00"
        weekDay="שני"
        phone="54-884-1196"
        parentPhone="541111111"
      />
      <Lesson
        name="אריאל"
        time="18:30"
        weekDay="שלישי"
        phone="54-884-1196"
        parentPhone="541111111"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef5ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
