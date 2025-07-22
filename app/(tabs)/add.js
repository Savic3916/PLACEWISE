import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
} from "react-native";
import { useEffect, useState } from "react";
import { getNigerianStateData } from "../../util/country_state_API";
import { useSelector, useDispatch } from "react-redux";
import Color from "../../constants/Color";
import RectangularCard from "../../components/authenticatedComponents/RectangularCard";
import Slider from "../../components/libraries/Slider";
import BottomDemacatingLine from "../../components/authenticatedComponents/BottomDemacatingLine";
import DropDownMenu from "../../components/libraries/DropDownMenu";

export default function AddTab() {
  const [chooseTrade, setChooseTrade] = useState("");
  const [chooseHouseType, setChooseHouseType] = useState("");
  const [chooseBedroomNumber, setChooseBedroomNumber] = useState("");
  const [chooseBathroomNumber, setChooseBathroomNumber] = useState("");
  const [chooseState, setChooseState] = useState([]);

  // REDUX: APP WIDE STATE
  const houseData = useSelector((state) => state.houseTypeData.houseData);
  const roomData = useSelector((state) => state.houseTypeData.roomData);

  const topCardData = [
    { id: "Rent", text: "Rent Property" },
    { id: "Sell", text: "Sell Property" },
  ];

  useEffect(() => {
    async function getState() {
      try {
        const states = await getNigerianStateData();
        setChooseState(states);
      } catch (error) {
        console.log(error);
      }
    }
    getState();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
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
              {houseData.map((obj) => (
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
          <BottomDemacatingLine />
          <View style={styles.generalTabView}>
            <Text style={styles.text}>Price Range</Text>
            <Slider min={1000} max={1000000} step={1000} />
          </View>
          <BottomDemacatingLine />
          <View style={styles.generalTabView}>
            <Text style={styles.text}>Bedrooms</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingVertical: 8 }}
            >
              {roomData.map((obj) => {
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
          <BottomDemacatingLine />
          <View style={styles.generalTabView}>
            <Text style={styles.text}>Bathrooms</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingVertical: 8 }}
            >
              {roomData.map((obj) => {
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
          <BottomDemacatingLine />
          <View style={[styles.generalTabView, { paddingRight: "3%" }]}>
            <Text style={styles.text}>Location</Text>
            <DropDownMenu myStates={chooseState} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 0,
    }),
  },
  container: {
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
    // marginTop: "5%",
  },
  text: {
    fontWeight: "bold",
    fontFamily: "SpaceMono-Bold",
    letterSpacing: 1,
    fontSize: 16,
  },
});
