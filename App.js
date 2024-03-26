import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Lesson from "./components/Lesson";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Lesson name="ניב" time="18:30" />
      <Lesson name="ניב" time="18:30" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
