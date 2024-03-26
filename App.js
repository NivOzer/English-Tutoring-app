import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Lesson from "./components/Lesson";
import logo from "./Logo.png";
import lessonData from "./lessons.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} resizeMode="contain" />
      <StatusBar style="auto" />
      {lessonData.map((lesson, index) => (
        <Lesson
          key={index}
          name={lesson.name}
          time={lesson.time}
          weekDay={lesson.weekDay}
          phone={lesson.phone}
          parentPhone={lesson.parentPhone}
        />
      ))}
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
  logo: {
    width: "75%",
    height: "10%",
    marginBottom: "5%",
  },
});
