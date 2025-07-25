import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import Color from "../../constants/Color";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LoginSignupBottomContainer from "../../components/LoginSignupBottomContainer";

const deviceWidth = Dimensions.get("window").width;

export default function Login({}) {
  const [secure, setSecure] = useState(true);
  const [userInputs, setUserInputs] = useState({
    email: { data: "", isValid: true },
    password: { data: "", isValid: true },
  });

  function userInputsChangeHandler(inputIdentifier, enteredText) {
    setUserInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { data: enteredText, isValid: true },
      };
    });
  }

  function showHidePasswordHandler() {
    setSecure(!secure);
  }
  function loginButtonHandler() {
    let userDetails = {
      email: userInputs.email.data,
      password: userInputs.password.data,
    };

    let emailIsValid =
      userDetails.email.trim().length > 0 &&
      userDetails.email.includes("@") &&
      userDetails.email.substring(0, userDetails.email.match("@").index)
        .length > 0;

    let passwordIsValid =
      userDetails.password.trim().length > 8 &&
      userDetails.password.search(/[@!#$%^&*()\-\_=+\|{};:\/?.><~]/) !== -1 &&
      userDetails.password.search(/[0-9]/) !== -1 &&
      userDetails.password.search(/[a-z]/) !== -1;

    if (!emailIsValid) {
      setUserInputs((currentInputs) => {
        return {
          ...currentInputs,
          ["email"]: { data: userDetails.email, isValid: false },
        };
      });
    }

    if (!passwordIsValid) {
      setUserInputs((currentInputs) => {
        return {
          ...currentInputs,
          ["password"]: { data: userDetails.password, isValid: false },
        };
      });
    }

    // what to do if they are both correct: which is send to the backend to authenticate
    // console.log(userDetails);

    // for now, i'll do
    if (emailIsValid && passwordIsValid) {
      router.navigate("/(tabs)");
    }
  }

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
        <View style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.firstScreenText}>Welcome Back to</Text>
            <Text style={styles.placeWiseText}>PLACEWISE</Text>
            <Text
              style={{
                color: Color.textInputIconGrays,
                fontWeight: "600",
                fontSize: deviceWidth < 321 ? 9 : 14,
              }}
            >
              Hey there, Sign in to continue
            </Text>
          </View>
          <View>
            <Input
              text="Email Address"
              inputStyle={styles.input}
              inputTextStyle={styles.inputText}
              iconName="envelope"
              props={{
                onChangeText: (enteredText) =>
                  userInputsChangeHandler("email", enteredText),
                value: userInputs.email.data,
              }}
            />
            {!userInputs.email.isValid && (
              <Text style={styles.errorText}>
                email must contain at least one letter before the '@' symbol
              </Text>
            )}
            <Input
              hasPassword={true}
              text="Password"
              inputStyle={styles.input}
              inputTextStyle={styles.inputText}
              iconName="lock"
              onPress={showHidePasswordHandler}
              props={{
                secureTextEntry: secure,
                onChangeText: (enteredText) =>
                  userInputsChangeHandler("password", enteredText),
                value: userInputs.password.data,
              }}
              secure={secure}
            />
            {!userInputs.password.isValid &&
            userInputs.password.data.length < 8 ? (
              <Text style={styles.errorText}>
                password must be more than 8{" "}
              </Text>
            ) : (
              !userInputs.password.isValid && (
                <Text style={styles.errorText}>
                  password must contain letters, special character and number{" "}
                </Text>
              )
            )}
          </View>
          <Button
            hasIcon={false}
            text="LOGIN"
            onPress={loginButtonHandler}
            buttonContainerWithoutIcons={styles.buttonContainerWithoutIcons}
            textStyle={styles.buttonText}
          />
          <LoginSignupBottomContainer isLogin={true} />
        </View>
      </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  container: {
    marginTop: deviceWidth < 321 ? "5%" : "20%",
    alignItems: "center",
  },
  firstScreenText: {
    fontFamily: "SpaceMono-Regular",
    fontSize: deviceWidth < 321 ? 9 : 15,
    letterSpacing: 2,
  },
  placeWiseText: {
    fontFamily: "Poppins-Black",
    fontSize: deviceWidth < 321 ? 20 : 35,
    marginBottom: deviceWidth < 321 ? "0%" : "3%",
    letterSpacing: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  buttonImage: {
    width: deviceWidth < 321 ? 18 : 25,
    height: deviceWidth < 321 ? 18 : 25,
    marginRight: "10%",
    marginLeft: "15%",
  },
  input: {
    color: Color.black,
    marginVertical: deviceWidth < 321 ? "2%" : "4%",
    borderColor: Color.buttonRed,
    padding: deviceWidth < 321 ? 12 : 17,
    paddingLeft: "15%",
    borderWidth: 2,
    borderRadius: 20,
    fontSize: deviceWidth < 321 ? 12 : 14,
  },
  inputText: {
    color: Color.buttonRed,
    fontSize: deviceWidth < 321 ? 11 : 14,
  },
  buttonContainerWithoutIcons: {
    paddingVertical: deviceWidth < 321 ? 8 : 10,
    paddingHorizontal: deviceWidth < 321 ? "8%" : "10%",
    backgroundColor: Color.buttonRed,
    borderColor: Color.buttonRed,
    borderWidth: 2,
    borderRadius: 12,
    marginVertical: deviceWidth < 321 ? "2%" : "4%",
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
    marginTop: deviceWidth < 321 ? "2%" : "5%",
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
  errorText: {
    color: "red",
    marginTop: "-2.5%",
    marginBottom: "1%",
    fontSize: deviceWidth < 321 ? 11 : 12.5,
    // textAlign: "center",
  },
});
