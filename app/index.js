import { StyleSheet, Text, View, Dimensions } from "react-native";
import { router } from "expo-router";
import { StatusBar } from 'expo-status-bar';
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
    router.navigate("/auth/signup");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
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
          buttonContainerWithIcon={styles.buttonContainerWithIcons}
          imageSource={require("../assets/images/real-estate.png")}
          imageStyle={styles.buttonImage}
          text="Purchase a home"
          textStyle={{
            fontWeight: "500",
            fontSize: deviceWidth < 321 ? 14 : 15,
          }}
          onPress={purchaseHomeButtonHandler}
        />
        <Button
          hasIcon={true}
          buttonContainerWithIcon={styles.buttonContainerWithIcons}
          imageSource={require("../assets/images/rent.png")}
          imageStyle={styles.buttonImage}
          text="Rent a home"
          textStyle={{
            fontWeight: "500",
            fontSize: deviceWidth < 321 ? 14 : 15,
          }}
          onPress={rentHomeButtonHandler}
        />
        <Button
          hasIcon={true}
          buttonContainerWithIcon={styles.buttonContainerWithIcons}
          imageSource={require("../assets/images/sale.png")}
          imageStyle={styles.buttonImage}
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
          buttonContainerWithoutIcons={styles.buttonContainerWithoutIcons}
          text="SKIP"
          textStyle={{
            fontFamily: "SpaceMono-Regular",
            fontWeight: "bold",
            fontSize: deviceWidth < 321 ? 15 : 18,
            color: Color.white,
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
  buttonContainerWithIcons: {
    paddingVertical: deviceWidth < 321 ? 8 : 10,
    paddingHorizontal: deviceWidth < 321 ? "8%" : "10%",
    backgroundColor: Color.secondaryButtonTeal,
    borderColor: Color.secondaryButtonTeal,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonContainerWithoutIcons: {
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
  buttonImage: {
    width: deviceWidth < 321 ? 18 : 25,
    height: deviceWidth < 321 ? 18 : 25,
    marginRight: "20%",
    tintColor: Color.black,
  }
});
