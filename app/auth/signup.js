import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import Color from "../../constants/Color";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkboxx from "../../components/Checkboxx";

const deviceWidth = Dimensions.get("window").width;

export default function Register({}) {
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
        {/* <Text style={styles.firstScreenText}>Welcome to</Text> */}
        <Text style={styles.placeWiseText}>PLACEWISE</Text>
        <Text
          style={{
            color: Color.textInputIconGrays,
            fontWeight: "600",
            letterSpacing: 1,
          }}
        >
          Hey there, Sign up to continue...
        </Text>
      </View>
      <View style={{ marginTop: "2%" }}>
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
        <Input
          hasPassword={true}
          text="Cofirm Password"
          inputStyle={styles.input}
          inputTextStyle={styles.inputText}
          iconName="lock"
          onPress={showHidePasswordHandler}
          props={{ secureTextEntry: secure }}
          secure={secure}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Checkboxx checkboxStyle={styles.checkbox} />
        <Text style={styles.agreementText}>I have read and I agree to </Text>
        <Link
          href=""
          style={[
            styles.agreementText,
            { color: Color.buttonRed, fontWeight: "bold" },
          ]}
        >
          User Agreement Privacy Policy
        </Link>
      </View>
      <Button
        hasIcon={false}
        text="REGISTER"
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
        text="Sign up with Google"
        textStyle={{
          fontWeight: "500",
          fontSize: deviceWidth < 321 ? 14 : 15,
        }}
      />
      <Button
        hasIcon={true}
        buttonContainerWithIcon={styles.buttonContainerWithIcons}
        imageSource={require("../../assets/images/google.png")}
        text="Sign up with Facebook"
        textStyle={{
          fontWeight: "500",
          fontSize: deviceWidth < 321 ? 14 : 15,
        }}
      />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Already have an account? </Text>
        <Link
          href="/auth/login"
          style={[
            styles.bottomText,
            { fontWeight: "bold", color: Color.buttonRed },
          ]}
        >
          Login
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
    marginTop: "5%",
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
    backgroundColor: Color.secondaryButtonTeal,
    borderColor: Color.secondaryButtonTeal,
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
  agreementText: {
    fontSize: 12,
  },
  checkbox: {
    marginHorizontal: 5,
  },
});
