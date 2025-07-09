import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import Color from "../../constants/Color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Inputs from "../../components/authenticatedComponents/Inputs";
import Card from "../../components/authenticatedComponents/Card";

const deviceHeight = Dimensions.get("window").height;

export default function Home() {
  const keyBoardDismissalMode =
    Platform.OS === "android" ? "on-drag" : "interactive";

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.bellIconTopView}>
          <FontAwesome name="bell-o" size={22} color="black" />
        </View>
        <View>
          <Text style={styles.firstScreenText}> Hi,There! </Text>
          <Inputs
            firstIconName="search"
            secondIconName="microphone"
            color="gray"
            size={20}
            props={{ placeholder: "Search", placeholderTextColor: "gray" }}
          />
        </View>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          horizontal
          bounces
          centerContent
          endFillColor={Color.supportingButtonRed}
          keyboardDismissMode={keyBoardDismissalMode}
          // indicatorStyle="black"
        >
          <Card
            text="House"
            imageSource={require("../../assets/images/house.png")}
          />
          <Card
            text="Apartment"
            imageSource={require("../../assets/images/apartment.png")}
          />
          <Card
            text="Duplex"
            imageSource={require("../../assets/images/duplex.png")}
          />
          <Card
            text="Shared Apartment"
            imageSource={require("../../assets/images/sharedapartment.png")}
          />
          <Card
            text="Self-Contained"
            imageSource={require("../../assets/images/travel.png")}
          />
          <Card
            text="Farm House"
            imageSource={require("../../assets/images/farm.png")}
          />
          <Card
            text="Hostel"
            imageSource={require("../../assets/images/hostel.png")}
          />
          <Card
            text="Commercial Space"
            imageSource={require("../../assets/images/office.png")}
          />
          <Card
            text="Shop"
            imageSource={require("../../assets/images/shops.png")}
          />
          <Card
            text="Short Let"
            imageSource={require("../../assets/images/room.png")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.white,
  },
  firstScreenText: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 18,
  },
  container: {
    padding: 10,
  },
  bellIconTopView: {
    alignItems: "flex-end",
    marginBottom: 8,
    // backgroundColor: 'green'
  },
  scrollView: {
    // backgroundColor: "red",
    padding: 10,
  },
});
