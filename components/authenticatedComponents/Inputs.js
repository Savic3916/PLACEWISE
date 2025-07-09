import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Color from "@/constants/Color";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Inputs({
  firstIconName,
  secondIconName,
  color,
  size,
  props,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.firstIconStyle}>
        <Ionicons name={firstIconName} size={size} color={color} />
      </View>
      <TextInput style={styles.inputs} {...props} />
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.secondIconStyle, styles.pressed]
            : styles.secondIconStyle
        }
      >
        <FontAwesome name={secondIconName} size={size} color={color} />
      </Pressable>
    </View>
  );
}

const shadows = Platform.select({
  android: { elevation: 4 },
  ios: {
    shadowColor: Color.grayOutline,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.65,
    shadowRadius: 2,
  },
});

const styles = StyleSheet.create({
  container: {
    marginVertical: "3%",
  },
  inputs: {
    padding: 10,
    paddingLeft: "10%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.lighterGrayOutline,
    backgroundColor: Color.lighterGrayOutline,
    ...shadows,
  },
  firstIconStyle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 1,
  },
  secondIconStyle: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    top: 8,
  },
});
