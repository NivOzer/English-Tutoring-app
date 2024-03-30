import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import EditScreen from "./components/EditScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
const Tab = createBottomTabNavigator();

export default function App() {
  const iconNames = {
    Home: "home",
    Edit: "hammer",
  };
  const [lessonsData, setLessonsData] = React.useState([]);
  const addLesson = (newLesson) => {
    setLessonsData((prevLessonsData) => [...prevLessonsData, newLesson]);
  };
  const deleteLesson = (selectedLesson) => {
    setLessonsData((prevLessonsData) =>
      prevLessonsData.filter((lesson) => lesson !== selectedLesson)
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            const iconName = focused
              ? iconNames[route.name]
              : `${iconNames[route.name]}`;
            return <Ionicons name={iconName} size={35} color={color} />;
          },
          tabBarShowLabel: false, // Hide tab labels
          tabBarStyle: [
            {
              ...styles.tabNav,
            },
          ],
        })}
      >
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen lessonsData={lessonsData} />}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Edit"
          children={() => (
            <EditScreen
              addLesson={addLesson}
              deleteLesson={deleteLesson}
              data={lessonsData}
            />
          )}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabNav: {
    backgroundColor: "#eef5ff",
    borderTopWidth: 0,
    paddingBottom: "11%",
  },
});
