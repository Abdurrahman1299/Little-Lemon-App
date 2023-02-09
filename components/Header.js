import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { yellowColor } from "../assets/constants"; // it is a must to leave the braces because it is a variable not a funciton (component)

export default function LittleLemonHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle} numberOfLines={1}>
        Little Lemon App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: yellowColor,
  },
  headerTitle: {
    paddingBottom: 8,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
});
