import * as React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import {
  darkGray,
  darkGreen,
  lightGray,
  lightWhite,
  yellowColor,
} from "../assets/constants"; // it is a must to leave the braces because it is a variable not a funciton (component)

export default function LittleLemonHeader() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.headerContainer,
        colorScheme === "dark"
          ? { backgroundColor: darkGreen }
          : { backgroundColor: lightGray },
      ]}
    >
      <Text
        style={[
          styles.headerTitle,
          colorScheme === "dark" ? { color: lightWhite } : { color: darkGray },
        ]}
        numberOfLines={1}
      >
        Little Lemon App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    elevation: 4,
    flex: 0.15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerTitle: {
    paddingBottom: 8,
    fontSize: 30,
    fontWeight: "bold",
  },
});
