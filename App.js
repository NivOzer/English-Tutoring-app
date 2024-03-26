import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import Lesson from "./components/Lesson";
import logo from "./Logo.png";
import lessonData from "./lessons.json";

const statusBarHeight = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;
const paddingTop = statusBarHeight + 0.5 * statusBarHeight;
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={logo} resizeMode="contain" />
      <View style={styles.lessonContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
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
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef5ff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: paddingTop,
  },
  logo: {
    width: "75%",
    height: "10%",
    marginBottom: "5%",
  },
  lessonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
