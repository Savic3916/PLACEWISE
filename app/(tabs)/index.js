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
  StatusBar,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Color from "../../constants/Color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Inputs from "../../components/authenticatedComponents/Inputs";
import Card from "../../components/authenticatedComponents/Card";

const deviceHeight = Dimensions.get("window").height;

export default function Home() {
  const keyBoardDismissalMode =
    Platform.OS === "android" ? "on-drag" : "interactive";

  // REDUX: APP WIDE STATE
  const houseData = useSelector((state) => state.houseTypeData.houseData);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
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
            {houseData.map((values) => {
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
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 0,
    }),
  },
  firstScreenText: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 18,
    color: Color.black,
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
