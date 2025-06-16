import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import Color from "../../constants/Color";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { router } from "expo-router";
import { Link } from "expo-router";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function Login({}) {
  const [secure, setSecure] = useState(true);

  function showHidePasswordHandler() {
    setSecure(!secure);
  }
  function buttonHandler() {
    console.log("Pressed");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.firstScreenText}>Welcome Back to</Text>
        <Text style={styles.placeWiseText}>PLACEWISE</Text>
        <Text style={{ color: Color.textInputIconGrays, fontWeight: "600" }}>
          Hey there, Sign in to continue
        </Text>
      </View>
      <View>
        <Input
          text="Email Address"
          inputStyle={styles.input}
          inputTextStyle={styles.inputText}
          iconName="envelope"
          props={{}}
        />
        <Input
          hasPassword={true}
          text="Password"
          inputStyle={styles.input}
          inputTextStyle={styles.inputText}
          iconName="lock"
          onPress={showHidePasswordHandler}
          props={{ secureTextEntry: secure }}
          secure={secure}
        />
      </View>
      <Button
        hasIcon={false}
        text="Login"
        onPress={buttonHandler}
        buttonContainerWithoutIcons={styles.buttonContainerWithoutIcons}
        textStyle={styles.buttonText}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: "3%",
        }}
      >
        <View style={styles.line} />
        <Text style={{ color: Color.textInputIconGrays }}> or </Text>
        <View style={styles.line} />
      </View>
      <Button
        hasIcon={true}
        buttonContainerWithIcon={styles.buttonContainerWithIcons}
        imageSource={require("../../assets/images/communication.png")}
        text="Sign in with Google"
        textStyle={{
          fontWeight: "500",
          fontSize: deviceWidth < 321 ? 14 : 15,
        }}
      />
      <Button
        hasIcon={true}
        buttonContainerWithIcon={styles.buttonContainerWithIcons}
        imageSource={require("../../assets/images/google.png")}
        text="Sign in with Facebook"
        textStyle={{
          fontWeight: "500",
          fontSize: deviceWidth < 321 ? 14 : 15,
        }}
      />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Don't have an account? </Text>
        <Link
          href="/auth/signup"
          style={[
            styles.bottomText,
            { fontWeight: "bold", color: Color.buttonRed },
          ]}
        >
          Register
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 10,
  },
  container: {
    marginTop: "15%",
    alignItems: "center",
  },
  firstScreenText: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 15,
    letterSpacing: 2,
  },
  placeWiseText: {
    fontFamily: "Poppins-Black",
    fontSize: 35,
    marginBottom: "3%",
    letterSpacing: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: "4%",
    borderColor: Color.buttonRed,
    padding: 15,
    paddingLeft: "15%",
    borderWidth: 2,
    borderRadius: 20,
  },
  inputText: {
    color: Color.buttonRed,
  },
  buttonContainerWithoutIcons: {
    paddingVertical: deviceWidth < 321 ? 8 : 10,
    paddingHorizontal: deviceWidth < 321 ? "8%" : "10%",
    backgroundColor: Color.buttonRed,
    borderColor: Color.buttonRed,
    borderWidth: 2,
    borderRadius: 12,
    marginVertical: "4%",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: deviceWidth < 321 ? 12 : 15,
    color: Color.white,
    letterSpacing: 5,
    fontFamily: "SpaceMono-Regular",
  },
  line: {
    flex: 1,
    borderBottomColor: Color.textInputIconGrays,
    borderBottomWidth: 1,
  },
  buttonContainerWithIcons: {
    paddingVertical: deviceWidth < 321 ? 8 : 10,
    paddingHorizontal: deviceWidth < 321 ? "8%" : "10%",
    backgroundColor: Color.supportingSecondaryButtonTeal,
    borderColor: Color.supportingSecondaryButtonTeal,
    borderWidth: 2,
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  bottomTextContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomText: {
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.65,
    color: Color.supportingButtonRed,
  },
});
