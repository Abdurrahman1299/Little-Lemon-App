import { StyleSheet, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
// --------------- React Navigation ---------------\\
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Ionicons } from "@expo/vector-icons";
// --------------- React Navigation ---------------\\
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuItemsScreen from "./screens/MenuItemsScreen";
import { grayColor, yellowColor } from "./assets/constants";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import LoginScreen from "./screens/LoginScreen";
// import { yellowColor } from "./assets/constants";

// objects returned from navigation
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Drawer.Navigator
            useLegacyImplementation
            initialRouteName="welcome"
            screenOptions={{
              drawerPosition: "left",
            }}
          >
            <Drawer.Screen name="welcome" component={WelcomeScreen} />
            <Drawer.Screen name="manu" component={MenuItemsScreen} />
          </Drawer.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
