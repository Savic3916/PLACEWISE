import { StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Color";

export default function BottomDemacatingLine() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: "2%",
  },
});
