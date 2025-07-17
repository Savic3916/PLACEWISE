import { Platform, Pressable, StyleSheet, Text, Image } from "react-native";
import Color from "../../constants/Color";

export default function RectangularCard({
  text,
  onPress,
  hasIcon,
  source,
  isSelected,
}) {
  if (hasIcon) {
    return (
      <Pressable
        onPress={onPress}
        style={
          isSelected ? styles.selectedHasIconContainer : styles.hasIconContainer
        }
      >
        <Image style={styles.image} source={source} />
        <Text style={isSelected ? styles.selectedText : styles.text}>
          {text}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={isSelected ? styles.selectedContainer : styles.container}
      onPress={onPress}
    >
      <Text style={isSelected ? styles.selectedText : styles.text}>{text}</Text>
    </Pressable>
  );
}

const shadow = Platform.select({
  android: { elevation: 3 },
  ios: {
    shadowColor: Color.black,
    shadowOffset: { height: 5, width: 0 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
});

const styles = StyleSheet.create({
  selectedContainer: {
    backgroundColor: Color.buttonRed,
    padding: 10,
    borderWidth: 1,
    borderColor: Color.black,
    borderRadius: 8,
    marginRight: 10,
    ...shadow,
  },
  container: {
    backgroundColor: Color.white,
    padding: 10,
    borderWidth: 1,
    borderColor: Color.black,
    borderRadius: 8,
    marginRight: 10,
    ...shadow,
  },
  selectedHasIconContainer: {
    backgroundColor: Color.buttonRed,
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Color.black,
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
    ...shadow,
  },
  hasIconContainer: {
    backgroundColor: Color.white,
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Color.black,
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
    ...shadow,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: Color.supportingSecondaryButtonTeal,
  },
  selectedText: {
    fontWeight: "400",
    color: Color.white,
    marginHorizontal: 10,
  },
  text: {
    fontWeight: "400",
    marginHorizontal: 6,
    fontSize: 12,
  },
  image: {
    height: 20,
    width: 20,
  },
});
