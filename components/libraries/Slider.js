import { StyleSheet, Text, View, TextInput } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useState } from "react";
import Color from "../../constants/Color";

export default function Slider({ min, max, step }) {
  const [myValues, setMyValues] = useState([1000]);

  function changeTextHandler(enteredText) {
    setMyValues([+enteredText]);
  }

  return (
    <View>
      <MultiSlider
        sliderLength={380}
        values={myValues}
        onValuesChange={setMyValues}
        min={min}
        max={max}
        step={step}
        selectedStyle={{ backgroundColor: Color.buttonRed, height: 5 }}
        unselectedStyle={{ backgroundColor: Color.supportingButtonRed }}
        markerStyle={{ backgroundColor: Color.supportingSecondaryButtonTeal }}
      />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{"\u20A6"}1000</Text>
        </View>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Input amount"
            keyboardType="number-pad"
            onChangeText={changeTextHandler}
            value={myValues[0].toString()}
          />
        </View>
        <View style={[styles.innerContainer, { alignItems: "flex-end" }]}>
          <Text style={styles.text}>{"\u20a6"}1,000,000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 6,
    textAlign: "center",
    backgroundColor: Color.white,
    color: Color.black,
  },
});
