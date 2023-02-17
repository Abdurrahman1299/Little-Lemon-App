import { StyleSheet, View, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
// --------------- React Navigation ---------------\\
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
// --------------- React Navigation ---------------\\
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuItemsScreen from "./screens/MenuItemsScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";
import {
  darkGray,
  darkGreen,
  darkYellow,
  lightGray,
  lightGreen,
  lightYellow,
} from "./assets/constants";

// objects returned from navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  const [isLogedIn, setIsLogedIn] = useState(false);

  function toggelLogin() {
    setIsLogedIn(!isLogedIn);
  }

  return (
    <>
      <StatusBar style="auto" />
      <Header />

      {!isLogedIn ? (
        <LoginScreen toggelLogin={toggelLogin} />
      ) : (
        <NavigationContainer>
          <View style={styles.container}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "welcome") {
                    iconName = focused
                      ? "ios-information-circle"
                      : "ios-information-circle-outline";
                  } else if (route.name === "manu") {
                    iconName = focused ? "ios-list" : "ios-list-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: lightYellow,
                tabBarInactiveTintColor: lightGray,
                headerShown: false,
                tabBarStyle: styles.tabBar,
              })}
            >
              <Tab.Screen name="welcome" component={WelcomeScreen} />
              <Tab.Screen name="manu" component={MenuItemsScreen} />
            </Tab.Navigator>
          </View>
        </NavigationContainer>
      )}

      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: lightGreen,
  },
});
