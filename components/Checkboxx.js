import Checkbox from "expo-checkbox";
import { useState } from "react";
import Color from "../constants/Color";

export default function Checkboxx({ checkboxStyle }) {
  const [isChecked, setChecked] = useState(false);
  console.log(isChecked);

  return (
    <Checkbox
      style={checkboxStyle}
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? Color.buttonRed : undefined}
    />
  );
}
