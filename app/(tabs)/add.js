import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import Color from "../../constants/Color";
import RectangularCard from "../../components/authenticatedComponents/RectangularCard";
import Slider from "../../components/libraries/Slider";
import BottomDemacatingLine from "../../components/authenticatedComponents/BottomDemacatingLine";

export default function AddTab() {
  const [chooseTrade, setChooseTrade] = useState("");
  const [chooseHouseType, setChooseHouseType] = useState("");
  const [chooseBedroomNumber, setChooseBedroomNumber] = useState("");
  const [chooseBathroomNumber, setChooseBathroomNumber] = useState("");

  const topCardData = [
    { id: "Rent", text: "Rent Property" },
    { id: "Sell", text: "Sell Property" },
  ];
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

  const roomCountData = [
    {
      id: 0,
      text: "None",
    },
    {
      id: 1,
      text: "1",
    },
    {
      id: 2,
      text: "2",
    },
    {
      id: 3,
      text: "3",
    },
    {
      id: 4,
      text: "4",
    },
    {
      id: 5,
      text: "5",
    },
    {
      id: 6,
      text: "6",
    },
    {
      id: 7,
      text: "7",
    },
    {
      id: 8,
      text: "8",
    },
    {
      id: 9,
      text: "9",
    },
    {
      id: 10,
      text: "10",
    },
  ];
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.screen}>
        <ScrollView style={styles.container}>
          <View style={styles.chooseTradeCard}>
            {topCardData.map((obj) => {
              return (
                <RectangularCard
                  key={obj.id}
                  text={obj.text}
                  onPress={() => setChooseTrade(obj.id)}
                  isSelected={obj.id === chooseTrade}
                />
              );
            })}
          </View>
          <BottomDemacatingLine />
          <View style={styles.generalTabView}>
            <Text style={styles.text}>House Type</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingVertical: 8 }}
            >
              {houseTypeData.map((obj) => (
                <RectangularCard
                  key={obj.id}
                  hasIcon={true}
                  text={obj.text}
                  source={obj.imageSource}
                  onPress={() => setChooseHouseType(obj.text)}
                  isSelected={obj.text === chooseHouseType}
                />
              ))}
            </ScrollView>
          </View>
          <BottomDemacatingLine/>
          <View style={styles.generalTabView}>
            <Text style={styles.text}>Price Range</Text>
            <Slider min={1000} max={1000000} step={1000} />
          </View>
          <BottomDemacatingLine/>
          <View style={styles.generalTabView}>
            <Text style={styles.text}>Bedrooms</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingVertical: 8 }}
            >
              {roomCountData.map((obj) => {
                return (
                  <RectangularCard
                    hasIcon={false}
                    text={obj.text}
                    key={obj.id}
                    onPress={() => setChooseBedroomNumber(obj.text)}
                    isSelected={obj.text === chooseBedroomNumber}
                  />
                );
              })}
            </ScrollView>
          </View>
          <BottomDemacatingLine/>
          <View style={styles.generalTabView}>
            <Text style={styles.text}>Bathrooms</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingVertical: 8 }}
            >
              {roomCountData.map((obj) => {
                return (
                  <RectangularCard
                    hasIcon={false}
                    text={obj.text}
                    key={obj.id}
                    onPress={() => setChooseBathroomNumber(obj.text)}
                    isSelected={obj.text === chooseBathroomNumber}
                  />
                );
              })}
            </ScrollView>
          </View>
        <BottomDemacatingLine/>
        
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    // padding: 10,
    flex: 1,
  },
  chooseTradeCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  houseTypeCard: {
    gap: 10,
  },
  generalTabView: {
    marginLeft: "5%",
    marginTop: "5%",
  },
  text: {
    fontWeight: "bold",
    fontFamily: "SpaceMono-Bold",
    letterSpacing: 1,
    fontSize: 16,
  },
});
