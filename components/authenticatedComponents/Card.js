import { Platform, StyleSheet, Text, Image, Pressable } from "react-native";
import React from "react";
import Color from "@/constants/Color";

export default function Card({ text, imageSource, onPress }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.card, styles.pressed] : styles.card
      }
      onPress={onPress}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.cardText}>{text}</Text>
    </Pressable>
  );
}

const shadow = Platform.select({
  android: { elevation: 4 },
  ios: {
    shadowColor: Color.black,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 3,
    borderColor: Color.lighterGrayOutline,
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: Color.white,
    ...shadow,
  },
  cardText: {
    fontSize: 12,
    textAlign: "center",
  },
  image: {
    width: 25,
    height: 25,
    marginBottom: 8,
  },
  pressed: {
    backgroundColor: Color.supportingButtonRed,
    opacity: 0.5,
  },
});
