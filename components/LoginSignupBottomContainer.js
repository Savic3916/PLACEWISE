import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Button from "./Button";
import Color from "../constants/Color";

const deviceWidth = Dimensions.get("window").width;
export default function LoginSignupBottomContainer({ isLogin }) {
  let authText = isLogin ? "Sign up" : "Login";
  let askAuthQuestion = isLogin
    ? "Don't have an account? "
    : "Already have an account ";

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: deviceWidth < 321 ? "0%" : "3%",
        }}
      >
        <View style={styles.line} />
        <Text style={{ color: Color.textInputIconGrays }}> or </Text>
        <View style={styles.line} />
      </View>
      <Button
        hasIcon={true}
        buttonContainerWithIcon={styles.buttonContainerWithIcons}
        imageSource={require("../assets/images/communication.png")}
        imageStyle={styles.buttonImage}
        text="Sign up with Google"
        textStyle={{
          fontWeight: "500",
          fontSize: deviceWidth < 321 ? 14 : 15,
        }}
      />
      <Button
        hasIcon={true}
        buttonContainerWithIcon={styles.buttonContainerWithIcons}
        imageSource={require("../assets/images/google.png")}
        imageStyle={styles.buttonImage}
        text="Sign up with Facebook"
        textStyle={{
          fontWeight: "500",
          fontSize: deviceWidth < 321 ? 14 : 15,
        }}
      />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>{askAuthQuestion}</Text>
        <Link
          replace
          href={isLogin ? "/auth/signup" : "/auth/login"}
          style={[
            styles.bottomText,
            { fontWeight: "bold", color: Color.buttonRed },
          ]}
        >
          {authText}
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    borderBottomColor: Color.textInputIconGrays,
    borderBottomWidth: 1,
  },
  buttonContainerWithIcons: {
    flexDirection: "row",
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
  buttonImage: {
    width: deviceWidth < 321 ? 18 : 25,
    height: deviceWidth < 321 ? 18 : 25,
    marginRight: "10%",
    marginLeft: "15%",
  },

  bottomTextContainer: {
    marginTop: deviceWidth < 321 ? "2%" : "3%",
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomText: {
    fontWeight: "600",
  },
});
