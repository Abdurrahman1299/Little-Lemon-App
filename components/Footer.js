import { StyleSheet, Text, View, useColorScheme } from "react-native";
import {
  darkGray,
  darkGreen,
  lightGray,
  lightWhite,
} from "../assets/constants"; // it is a must to leave the braces because it is a variable not a funciton (component)
export default function Footer() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.footerContainer,
        colorScheme === "dark"
          ? { backgroundColor: darkGreen }
          : { backgroundColor: lightGray },
      ]}
    >
      <Text
        style={[
          styles.footerText,
          colorScheme === "dark" ? { color: lightWhite } : { color: darkGray },
        ]}
      >
        All rights reserved by Little Lemon, 2023
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: { elevation: 4 },
  footerText: {
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
  },
});
