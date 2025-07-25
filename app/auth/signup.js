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
import { Link } from "expo-router";
import Color from "../../constants/Color";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkboxx from "../../components/Checkboxx";
import LoginSignupBottomContainer from "../../components/LoginSignupBottomContainer";

const deviceWidth = Dimensions.get("window").width;

export default function Register({}) {
  const [isChecked, setChecked] = useState(false);
  const [secure, setSecure] = useState(true);
  const [secureTwo, setSecureTwo] = useState(true);
  const [userInputs, setUserInputs] = useState({
    email: { data: "", isValid: true },
    password: { data: "", isValid: true },
    confirmPassword: { data: "", isValid: true },
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

  function showHidePasswordHandlerTwo() {
    setSecureTwo(!secureTwo);
  }

  function signupButtonHandler() {
    let userDetails = {
      email: userInputs.email.data,
      password: userInputs.password.data,
      confirmPassword: userInputs.confirmPassword.data,
    };

    // validate
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

    let confirmPasswordIsValid =
      userDetails.password.trim().length > 8 &&
      userDetails.confirmPassword.search(/[@!#$%^&*()\-\_=+\|{};:\/?.><~]/) !==
        -1 &&
      userDetails.confirmPassword.search(/[0-9]/) !== -1 &&
      userDetails.confirmPassword.search(/[a-z]/) !== -1 &&
      userDetails.confirmPassword === userDetails.password;

    if (!emailIsValid) {
      setUserInputs((currentInput) => {
        return {
          ...currentInput,
          ["email"]: { data: userDetails.email, isValid: false },
        };
      });
    }

    if (!passwordIsValid) {
      setUserInputs((currentInput) => {
        return {
          ...currentInput,
          ["password"]: { data: userDetails.password, isValid: false },
        };
      });
    }

    if (!confirmPasswordIsValid) {
      setUserInputs((currentInput) => {
        return {
          ...currentInput,
          ["confirmPassword"]: {
            data: userDetails.confirmPassword,
            isValid: false,
          },
        };
      });
    }

    if (!isChecked) {
      return;
    }

    // if it is validated, work....
    console.log("Everything is valid!");
  }

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
        <View style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.placeWiseText}>PLACEWISE</Text>
            <Text
              style={{
                color: Color.textInputIconGrays,
                fontWeight: "600",
                letterSpacing: 1,
                fontSize: deviceWidth < 321 ? 9 : 14,
              }}
            >
              Hey there, Sign up to continue...
            </Text>
          </View>
          <View style={{ marginTop: deviceWidth < 321 ? "0%" : "2%" }}>
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

            {/* email error message */}
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

            {/* password error message */}
            {!userInputs.password.isValid &&
            userInputs.password.data.length < 8 ? (
              <Text style={styles.errorText}>
                password must be more than 8 characters
              </Text>
            ) : (
              !userInputs.password.isValid && (
                <Text style={styles.errorText}>
                  password must contain letters, special character and number
                </Text>
              )
            )}
            <Input
              hasPassword={true}
              text="Cofirm Password"
              inputStyle={styles.input}
              inputTextStyle={styles.inputText}
              iconName="lock"
              onPress={showHidePasswordHandlerTwo}
              props={{
                secureTextEntry: secureTwo,
                onChangeText: (enteredText) =>
                  userInputsChangeHandler("confirmPassword", enteredText),
                value: userInputs.confirmPassword.data,
              }}
              secure={secureTwo}
            />

            {/* confirmpassword error message */}
            {!userInputs.confirmPassword.isValid &&
            userInputs.confirmPassword.data.length < 8 ? (
              <Text style={styles.errorText}>
                password must be more than 8 characters
              </Text>
            ) : !userInputs.confirmPassword.isValid &&
              userInputs.confirmPassword.data !== userInputs.password.data ? (
              <Text style={styles.errorText}>Password mismatch</Text>
            ) : (
              !userInputs.password.isValid && (
                <Text style={styles.errorText}>
                  password must contain letters, special character and number
                </Text>
              )
            )}
          </View>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Checkboxx
              checkboxStyle={styles.checkbox}
              isChecked={isChecked}
              setChecked={setChecked}
            />
            <Text style={styles.agreementText}>
              I have read and I agree to{" "}
            </Text>
            <Link
              href="/auth/useragreement"
              style={[
                styles.agreementText,
                { color: Color.buttonRed, fontWeight: "bold" },
              ]}
            >
              User Agreement Privacy Policy
            </Link>
          </View>

          {/* user agreement error message */}
          {!isChecked && (
            <Text style={styles.errorText}>
              Please tick the box to continue
            </Text>
          )}
          <Button
            hasIcon={false}
            text="REGISTER"
            onPress={signupButtonHandler}
            buttonContainerWithoutIcons={styles.buttonContainerWithoutIcons}
            textStyle={styles.buttonText}
          />
          <LoginSignupBottomContainer isLogin={false} />
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
    marginTop: deviceWidth < 321 ? "0%" : "10%",
    alignItems: "center",
  },
  placeWiseText: {
    fontFamily: "Poppins-Black",
    fontSize: deviceWidth < 321 ? 20 : 35,
    letterSpacing: 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  input: {
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

  pressed: {
    opacity: 0.65,
    color: Color.supportingButtonRed,
  },
  agreementText: {
    fontSize: deviceWidth < 321 ? 10 : 12,
    marginBottom: "3%",
  },
  checkbox: {
    marginHorizontal: 5,
  },
  errorText: {
    color: "red",
    marginTop: "-2%",
    marginBottom: "1%",
    fontSize: deviceWidth < 321 ? 11 : 12.5,
    // textAlign: "center",
  },
});
