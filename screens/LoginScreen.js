import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Alert,
  Pressable,
  useColorScheme,
} from "react-native";
// it is a must to leave the braces because it is a variable not a funciton (component)
import {
  lightGray,
  whiteColor,
  yellowColor,
  grayColor,
} from "../assets/constants";

export default function WelcomeScreen() {
  const [logedin, setLogedin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        colorScheme === "dark"
          ? { backgroundColor: grayColor }
          : { backgroundColor: whiteColor },
      ]}
    >
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      {!logedin ? (
        <ScrollView keyboardDismissMode="on-drag">
          <Text style={styles.title}>Login to continue</Text>
          <TextInput
            style={styles.textInput}
            value={username}
            placeholder={"username"}
            onChangeText={setUsername}
            cursorColor={yellowColor}
            keyboardType="email-address"
            // onFocus={() => Alert.alert("username is focused")}
            // onBlur={() => Alert.alert("username is blurred")}
          />
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder={"PIN"}
            onChangeText={setPassword}
            cursorColor={yellowColor}
            keyboardType="numeric"
            secureTextEntry
            maxLength={4}
          />
          <Pressable
            style={styles.inButton}
            onPress={() => {
              setLogedin(!logedin);
            }}
          >
            {!logedin ? <Text style={styles.buttonText}>Login</Text> : ""}
          </Pressable>
        </ScrollView>
      ) : (
        <>
          <Text style={styles.whenLogedin}>You are Loged In!</Text>
          <Pressable onPress={() => setLogedin(!logedin)}>
            <Text style={styles.backButton}>Back</Text>
          </Pressable>
        </>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: whiteColor,
    marginTop: 20,
    marginBottom: 36,
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: whiteColor,
    color: lightGray,
  },
  inButton: {
    paddingVertical: 8,
    marginVertical: 18,
    borderRadius: 8,
    backgroundColor: yellowColor,
  },
  buttonText: {
    color: grayColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  whenLogedin: {
    fontSize: 24,
    fontWeight: "bold",
    color: whiteColor,
    textAlign: "center",
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 24,
    fontWeight: "bold",
    color: grayColor,
    textAlign: "center",
    backgroundColor: yellowColor,
    marginVertical: 36,
    borderRadius: 8,
  },
});
