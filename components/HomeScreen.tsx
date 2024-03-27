import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lesson from "./Lesson";
import logo from "../Logo.png";
import lessonData from "../lessons.json";
type Props = {};
const statusBarHeight =
  Platform.OS === "ios" ? 50 : (StatusBar as any).currentHeight;

const paddingTop = statusBarHeight + 0.5 * statusBarHeight;
const HomeScreen = (props: Props) => {
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
              material={lesson.material}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

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
