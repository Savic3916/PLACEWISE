import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import Color from "@/constants/Color";

export default function Button({
  hasIcon,
  imageSource,
  imageStyle,
  text,
  buttonContainerWithIcon,
  buttonContainerWithoutIcons,
  textStyle,
  onPress,
}) {
  if (hasIcon === true) {
    return (
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [buttonContainerWithIcon, styles.hasIconPressed]
            : buttonContainerWithIcon
        }
        onPress={onPress}
        android_ripple={{
          color: Color.supportingSecondaryButtonTeal,
          borderless: true,
        }}
      >
        <View style={styles.buttonView}>
          <Image
            style={imageStyle}
            source={imageSource}
          />
          <Text style={textStyle}>{text}</Text>
        </View>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [buttonContainerWithoutIcons, styles.hasNoIconPressed]
            : buttonContainerWithoutIcons
        }
        onPress={onPress}
        android_ripple={{ color: Color.supportingButtonRed, borderless: true }}
      >
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    );
  }
}

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
  },
  hasIconPressed: {
    opacity: 0.5,
    overflow: "hidden",
    backgroundColor: Color.supportingSecondaryButtonTeal,
  },
  hasNoIconPressed: {
    opacity: 0.5,
    overflow: "hidden",
    backgroundColor: Color.supportingButtonRed,
  },
});
