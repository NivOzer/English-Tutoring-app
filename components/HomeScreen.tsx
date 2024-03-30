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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
// import lessonData from "../lessons.json";

// Define the type for lesson data object
type LessonData = {
  name: string;
  time: string;
  weekDay: string;
  phone: string;
  parentPhone: string;
  materials: string[]; // Assuming materials is a string
};
type Props = {
  lessonsData?: LessonData[]; // Define the type of lessonsData
};
const statusBarHeight =
  Platform.OS === "ios" ? 50 : (StatusBar as any).currentHeight;

const paddingTop = statusBarHeight + 0.5 * statusBarHeight;
const HomeScreen = (props: Props) => {
  let { lessonsData } = props;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={logo} resizeMode="contain" />
      <View style={styles.lessonContainer}>
        {lessonsData.length === 0 ? (
          <View style={styles.noLessonsField}>
            <View style={styles.noLessonsFieldAlert}>
              <Ionicons name="alert-circle-outline" size={60} />
              <Text style={styles.noLessonsFieldAlertText}>
                No Available Lessons
              </Text>
            </View>
            <View style={styles.noLessonsFieldDown}>
              <Text style={styles.noLessonsFieldDownText}>
                You can Add more lesson In "Edit" tab below
              </Text>
              <Ionicons name="arrow-down" size={30} />
            </View>
          </View>
        ) : (
          <>
            <Text style={styles.myLessonsLabel}>השיעורים שלי</Text>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              {lessonsData.map((lesson, index) => (
                <Lesson
                  key={index}
                  name={lesson.name}
                  time={lesson.time}
                  weekDay={lesson.weekDay}
                  phone={lesson.phone}
                  parentPhone={lesson.parentPhone}
                  material={lesson.materials}
                />
              ))}
            </ScrollView>
          </>
        )}
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
    paddingTop: paddingTop * 2,
  },
  logo: {
    width: "75%",
    height: "11%",
    marginBottom: "10%",
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
  myLessonsLabel: {
    fontSize: 25,
    marginBottom: "3%",
  },
  //No lesson field
  noLessonsField: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  noLessonsFieldAlert: {
    alignItems: "center",
    marginBottom: "50%",
    marginTop: "30%",
    height: "15%",
    justifyContent: "space-between",
  },
  noLessonsFieldDown: {
    alignItems: "center",
    height: "25%",
    justifyContent: "space-evenly",
  },
  noLessonsFieldAlertText: { fontSize: 20 },
  noLessonsFieldDownText: { fontSize: 15 },
});
