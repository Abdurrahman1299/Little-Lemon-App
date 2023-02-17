import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Pressable,
  useColorScheme,
} from "react-native";
// it is a must to leave the braces because it is a variable not a funciton (component)
import {
  lightGray,
  darkGray,
  lightGreen,
  lightWhite,
  darkGreen,
  darkYellow,
  lightYellow,
} from "../assets/constants";

export default function LoginScreen({ toggelLogin }) {
  const [logedin, setLogedin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        colorScheme === "dark"
          ? { backgroundColor: darkGray }
          : { backgroundColor: lightWhite },
      ]}
    >
      <Text
        style={[
          styles.title,
          colorScheme === "dark"
            ? { color: lightYellow }
            : { color: darkYellow },
        ]}
      >
        Welcome to Little Lemon
      </Text>

      {!logedin ? (
        <ScrollView keyboardDismissMode="none">
          <Text
            style={[
              styles.title,
              colorScheme === "dark"
                ? { color: lightYellow }
                : { color: darkYellow },
            ]}
          >
            Login to continue
          </Text>
          <TextInput
            style={styles.textInput}
            value={username}
            placeholder={"username"}
            onChangeText={setUsername}
            cursorColor={darkYellow}
            keyboardType="email-address"
            maxLength={16}
            // onFocus={() => Alert.alert("username is focused")}
            // onBlur={() => Alert.alert("username is blurred")}
          />
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder={"PIN"}
            onChangeText={setPassword}
            cursorColor={darkYellow}
            keyboardType="numeric"
            secureTextEntry
            maxLength={4}
          />
          {username === "" || password === "" ? (
            <Pressable style={[styles.inButton, { opacity: 0.4 }]} disabled>
              {!logedin ? (
                <Text
                  style={[
                    styles.buttonText,
                    colorScheme === "dark"
                      ? { backgroundColor: darkYellow }
                      : { backgroundColor: darkGreen },
                  ]}
                >
                  Login
                </Text>
              ) : (
                ""
              )}
            </Pressable>
          ) : (
            <Pressable
              style={[styles.inButton]}
              onPress={() => {
                setLogedin(!logedin);
              }}
            >
              {!logedin ? (
                <Text
                  style={[
                    styles.buttonText,
                    colorScheme === "dark"
                      ? { backgroundColor: darkYellow }
                      : { backgroundColor: darkGreen },
                  ]}
                >
                  Login
                </Text>
              ) : (
                ""
              )}
            </Pressable>
          )}
        </ScrollView>
      ) : (
        <>
          <Text
            style={[
              styles.whenLogedin,
              colorScheme === "dark"
                ? { color: lightYellow }
                : { color: darkYellow },
            ]}
          >
            You are Loged In!
          </Text>
          <Pressable onPress={() => toggelLogin()}>
            <Text
              style={[
                styles.backButton,
                colorScheme === "dark"
                  ? { color: darkYellow }
                  : { color: darkYellow },
              ]}
            >
              Explore Our Menu
            </Text>
          </Pressable>
        </>
      )}
    </View>
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
    marginTop: 20,
    marginBottom: 36,
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    borderRadius: 8,
    borderColor: darkYellow,
    borderWidth: 1.4,
    backgroundColor: lightGray,
    color: darkGray,
  },
  inButton: {
    paddingVertical: 8,
    marginVertical: 18,
    borderRadius: 8,
  },
  buttonText: {
    marginHorizontal: 32,
    color: lightWhite,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 8,
    paddingVertical: 16,
  },
  whenLogedin: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 36,
    borderRadius: 8,
    backgroundColor: lightGreen,
  },
});
