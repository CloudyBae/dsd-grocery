import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IDCard = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill="#52B175"
      d="M7 4C4.8 4 3 5.8 3 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m-7 8c0-2.2 3.1-4 7-4c1.5 0 2.9.3 4 .7V17c-.8-.5-2.2-1-4-1c-3.2 0-5 1.4-5 2h9v2H0zM22 4h-7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14h-7V6h7z"
    />
  </Svg>
);
export default IDCard;