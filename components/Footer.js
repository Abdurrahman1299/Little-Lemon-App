import { StyleSheet, Text, View } from "react-native";
import { yellowColor } from "../assets/constants"; // it is a must to leave the braces because it is a variable not a funciton (component)
const Footer = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>
      All rights reserved by Little Lemon, 2023
    </Text>
  </View>
);
export default Footer;

const styles = StyleSheet.create({
  footerText: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    fontStyle: "italic",
  },
});
