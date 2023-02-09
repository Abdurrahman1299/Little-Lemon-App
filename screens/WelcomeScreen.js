import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ImageBackground,
  useColorScheme,
  Pressable,
} from "react-native";
// it is a must to leave the braces because it is a variable not a funciton (component)
import {
  grayColor,
  lightGray,
  whiteColor,
  yellowColor,
} from "../assets/constants";

export default function WelcomeScreen({ navigation }) {
  // ana mesh 3aref el 'navigation' da geh mneen?
  const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        colorScheme === "dark"
          ? { backgroundColor: grayColor }
          : { backgroundColor: whiteColor },
      ]}
      // array of objects not strings
    >
      <ScrollView keyboardDismissMode="on-drag">
        <View style={styles.header}>
          <Image
            // blurRadius={2} used to make the image blurred
            source={require("../img/logoImg.png")}
            resizeMode="contain"
            style={styles.logoImg}
            accessibilityLabel={"app logo"}
            accessible={true}
          />
          <Text
            style={[
              styles.title,
              colorScheme === "dark"
                ? { color: whiteColor }
                : { color: lightGray },
            ]}
          >
            Little Lemon
          </Text>
        </View>
        <Text
          style={[
            styles.text,
            colorScheme === "dark"
              ? { color: whiteColor }
              : { color: lightGray },
          ]}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        {/* <Pressable onPress={() => navigation.navigate("login")}>
          <Text style={styles.button}>Login</Text>
        </Pressable> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 16,
  },
  title: {
    borderBottomWidth: 2,
    fontSize: 30,
    fontWeight: "bold",
    borderBottomColor: yellowColor,
    paddingVertical: 8,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    padding: 16,
  },
  logoImg: {
    width: 100,
    height: 100,
    // tintColor: yellowColor, makes the whole image color one color: can be used for logos like this
  },
  button: {
    fontSize: 24,
    backgroundColor: whiteColor,
    color: yellowColor,
    textAlign: "center",
    marginHorizontal: 90,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
