import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../common/res/colors";

export const ArrowLeft = ({
  color = '#28282A'
}: {
  color?: string;
}): React.ReactElement => (
  <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <Path
      d="M12 10L7 15M7 15L12 20M7 15H23"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CloseVector = ({
  mainColor = colors.black
}: {
  mainColor?: string;
}): React.ReactElement => (
  <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <Path
      d="M1 1.17163L6.65686 6.82849M1 6.82849L6.65685 1.17163"
      stroke={mainColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);