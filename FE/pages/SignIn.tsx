import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Google from "../icons/Google.svg";
import Facebook from "../icons/facebook-logo.svg";
import { color } from "react-native-elements/dist/helpers";
import MainLogo from "../icons/Main-logo.svg";
import Sublogo from "../icons/subtitle-logo.svg";

const styles = StyleSheet.create({
  title: {
    marginBottom: 100,
  },
  container: {
    // flex: 1,
    // padding: 24,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 68,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    margin: "auto",
  },
  inputField: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 16,
    width: "80%",
    height: 40,
  },
  headerImage: {
    width: 166,
    height: 182,
  },
  text: {
    fontSize: 14,
    color: "#5F9FFF",
  },
});

interface ISignIn {
  refetch: () => void;
}

const SignIn = ({ refetch }: ISignIn) => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [alreadyHasAccount, setAlreadyHasAccount] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      //     const res = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
      //         email: email
      //     })
      //     await AsyncStorage.setItem(
      //         'household',
      //         res.data.householdId,
      //     );
      await AsyncStorage.setItem("user", "Isaac");
      refetch();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {/* <Text>To sign in, please input your email</Text> */}
          <View style={{ marginBottom: 158, alignItems: "center" }}>
            <MainLogo />
            <Sublogo />
          </View>
          {alreadyHasAccount ? (
            <>
              <TextInput
                style={styles.inputField}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Email address"
              />
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                autoCapitalize="none"
              />
              <View style={{ marginBottom: 52 }}>
                <Button title="Sign In" onPress={handleSignIn} />
              </View>
              <Pressable
                onPress={() => {
                  setAlreadyHasAccount(false);
                }}
              >
                <Text style={styles.text}>Other sign in methods</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable
                style={{
                  width: 267,
                  height: 53,
                  flexShrink: 0,
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRadius: 16,
                  flexDirection: "row",
                  marginBottom: 16,
                  shadowColor: "#212121",
                  shadowOffset: {
                    width: 2,
                    height: 4,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                }}
                onPress={() => {}}
              >
                <Google
                  width={"25"}
                  height={"25"}
                  style={{ marginLeft: 16, marginRight: 24 }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    // letterSpacing: -0.3
                  }}
                >
                  Sign in with Google
                </Text>
              </Pressable>
              <Pressable
                style={{
                  width: 267,
                  height: 53,
                  flexShrink: 0,
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRadius: 16,
                  flexDirection: "row",
                  marginBottom: 80,
                  shadowColor: "#212121",
                  shadowOffset: {
                    width: 2,
                    height: 4,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                }}
                onPress={() => {}}
              >
                <Facebook
                  width={"25"}
                  height={"25"}
                  style={{ marginLeft: 16, marginRight: 24 }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    // letterSpacing: -0.3
                  }}
                >
                  Sign in with Facebook
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setAlreadyHasAccount(true);
                }}
              >
                <Text style={styles.text}>I already have an account</Text>
              </Pressable>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default SignIn;
