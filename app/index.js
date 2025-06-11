import { StyleSheet, Text, View, Dimensions } from "react-native";
import { router } from "expo-router";
import Color from "../constants/Color";
import Button from "../components/Button";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function FirstScreen({}) {
  function purchaseHomeButtonHandler() {
    console.log("Pressed");
  }

  function saleHomeButtonHandler() {
    console.log("Pressed");
  }

  function rentHomeButtonHandler() {
    console.log("Pressed");
  }

  function skipButtonHander() {
    router.navigate("/auth/login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>What are you looking for</Text>
        <Text style={styles.otherText}>
          We'll start with these listings. You
        </Text>
        <Text style={styles.otherText}>can change it later</Text>
      </View>
      <View>
        <Button
          hasIcon={true}
          buttonContainerWIthIcon={styles.buttonContainerWIthIcons}
          imageSource={require("../assets/images/real-estate.png")}
          text="Purchase a home"
          textStyle={{
            fontWeight: "500",
            fontSize: deviceWidth < 321 ? 14 : 15,
          }}
          onPress={purchaseHomeButtonHandler}
        />
        <Button
          hasIcon={true}
          buttonContainerWIthIcon={styles.buttonContainerWIthIcons}
          imageSource={require("../assets/images/rent.png")}
          text="Rent a home"
          textStyle={{
            fontWeight: "500",
            fontSize: deviceWidth < 321 ? 14 : 15,
          }}
          onPress={rentHomeButtonHandler}
        />
        <Button
          hasIcon={true}
          buttonContainerWIthIcon={styles.buttonContainerWIthIcons}
          imageSource={require("../assets/images/sale.png")}
          text="Sale a home"
          textStyle={{
            fontWeight: "500",
            fontSize: deviceWidth < 321 ? 14 : 15,
          }}
          onPress={saleHomeButtonHandler}
        />
      </View>
      <View style={{ marginTop: deviceHeight < 569 ? "10%" : "15%" }}>
        <Button
          hasIcon={false}
          buttonContainerWIthoutIcons={styles.buttonContainerWIthoutIcons}
          text="SKIP"
          textStyle={{
            fontWeight: "500",
            fontSize: deviceWidth < 321 ? 15 : 18,
            color: "white",
            letterSpacing: 5,
          }}
          onPress={skipButtonHander}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    padding: 15,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: deviceHeight < 569 ? "5%" : "10%",
  },
  mainText: {
    fontSize: deviceWidth < 321 ? 20 : 28,
    fontWeight: "600",
    fontFamily: "Sedan",
    marginBottom: 8,
    color: Color.blackGrayHeading,
  },
  otherText: {
    fontSize: deviceWidth < 321 ? 12 : 14,
    color: Color.grayOutline,
    fontWeight: "500",
  },
  buttonViewStyle: {
    backgroundColor: "red",
    justifyContent: "center",
  },
  buttonContainerWIthIcons: {
    paddingVertical: deviceWidth < 321 ? 8 : 10,
    paddingHorizontal: deviceWidth < 321 ? "8%" : "10%",
    backgroundColor: Color.white,
    borderColor: Color.grayOutline,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonContainerWIthoutIcons: {
    paddingVertical: deviceWidth < 321 ? 8 : 10,
    paddingHorizontal: deviceWidth < 321 ? "8%" : "10%",
    backgroundColor: Color.buttonRed,
    borderColor: Color.buttonRed,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
  },
});
