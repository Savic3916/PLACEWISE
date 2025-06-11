import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import React from "react";
import Color from "../../constants/Color";
import Input from "../../components/Input";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function login({ }) {

  function showHidePasswordHandler(){
    console.log('Pressed!!')
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "SpaceMono-Regular",
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          Welcome Back to
        </Text>
        <Text
          style={{
            fontFamily: "CrimsonText-Bold",
            fontSize: 28,
            marginBottom: "3%",
          }}
        >
          PLACEWISE
        </Text>
        <Text style={{ color: Color.gray200, fontWeight: "600" }}>
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
          props={{ secureTextEntry: true }}
        />
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
    marginTop: "20%",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: "4%",
    borderColor: Color.red100,
    padding: 17,
    paddingLeft: "15%",
    borderWidth: 2,
    borderRadius: 20,
  },
  inputText: {
    color: Color.red100,
  },
});
