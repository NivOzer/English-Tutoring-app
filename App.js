import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import EditScreen from "./components/EditScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
export default function App() {
  const iconNames = {
    Home: "home",
    Edit: "create",
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? iconNames[route.name]
              : `${iconNames[route.name]}`;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Edit"
          component={EditScreen}
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
    elevation: 5,
  },
});
