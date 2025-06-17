import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import Color from "../constants/Color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

const deviceWidth = Dimensions.get("window").width;

export default function Input({
  hasPassword,
  inputTextStyle,
  inputStyle,
  text,
  props,
  iconName,
  onPress,
  secure,
}) {
  if (hasPassword) {
    return (
      <View style={{ position: "relative" }}>
        <View style={styles.container}>
          <Text style={inputTextStyle}>{text}</Text>
        </View>
        <View style={styles.placeholderIcon}>
          <FontAwesome
            name={iconName}
            size={deviceWidth < 321 ? 14 : 18}
            color={Color.textInputIconGrays}
          />
        </View>
        <TextInput style={inputStyle} {...props} />
        <Pressable
          onPress={onPress}
          style={({ pressed }) =>
            pressed
              ? [styles.passwordShowToggle, styles.pressed]
              : styles.passwordShowToggle
          }
        >
          {secure ? (
            <Ionicons
              name="eye"
              size={deviceWidth < 321 ? 16 : 20}
              color={Color.textInputIconGrays}
            />
          ) : (
            <Ionicons
              name="eye-off"
              size={deviceWidth < 321 ? 16 : 20}
              color={Color.textInputIconGrays}
            />
          )}
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={{ position: "relative" }}>
        <View style={styles.container}>
          <Text style={inputTextStyle}>{text}</Text>
        </View>
        <View style={styles.placeholderIcon}>
          <FontAwesome
            name={iconName}
            size={deviceWidth < 321 ? 14 : 18}
            color={Color.textInputIconGrays}
          />
        </View>
        <TextInput style={inputStyle} {...props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Color.white,
    position: "absolute",
    padding: 5,
    left: 20,
    top: deviceWidth < 321 ? -5 : 0,
  },
  placeholderIcon: {
    position: "absolute",
    left: 20,
    top: deviceWidth < 321 ? 23 : 35,
  },
  passwordShowToggle: {
    position: "absolute",
    top: deviceWidth < 321 ? 23 : 30,
    right: 15,
  },
  pressed: {
    opacity: 0.5,
  },
});
