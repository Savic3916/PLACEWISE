import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
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

  const houseTypeData = [
    {
      id: 1,
      text: "House",
      imageSource: require("../../assets/images/house.png"),
    },
    {
      id: 2,
      text: "Apartment",
      imageSource: require("../../assets/images/apartment.png"),
    },
    {
      id: 3,
      text: "Duplex",
      imageSource: require("../../assets/images/duplex.png"),
    },
    {
      id: 4,
      text: "Shared Apartment",
      imageSource: require("../../assets/images/sharedapartment.png"),
    },
    {
      id: 5,
      text: "Self Contained",
      imageSource: require("../../assets/images/travel.png"),
    },
    {
      id: 6,
      text: "Farm House",
      imageSource: require("../../assets/images/farm.png"),
    },
    {
      id: 7,
      text: "Hostel",
      imageSource: require("../../assets/images/hostel.png"),
    },
    {
      id: 8,
      text: "Commercial Space",
      imageSource: require("../../assets/images/office.png"),
    },
    {
      id: 9,
      text: "Shop",
      imageSource: require("../../assets/images/shops.png"),
    },
    {
      id: 10,
      text: "Short Let",
      imageSource: require("../../assets/images/room.png"),
    },
  ];
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            {houseTypeData.map((values) => {
              return (
                <Card
                  key={values.id}
                  text={values.text}
                  imageSource={values.imageSource}
                />
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  },
  scrollView: {
    padding: 10,
  },
});
