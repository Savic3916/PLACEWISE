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
            ? [buttonContainerWithIcon, styles.pressed]
            : buttonContainerWithIcon
        }
        onPress={onPress}
      >
        <Image style={imageStyle} source={imageSource} />
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [buttonContainerWithoutIcons, styles.pressed]
            : buttonContainerWithoutIcons
        }
        onPress={onPress}
      >
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    );
  }
}

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
