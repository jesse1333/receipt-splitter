import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = (props: any) => (
  <Svg
    width={12}
    height={13}
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.75 11C8.37335 11 10.5 8.87335 10.5 6.25C10.5 3.62665 8.37335 1.5 5.75 1.5C3.12665 1.5 1 3.62665 1 6.25C1 8.87335 3.12665 11 5.75 11Z"
      stroke="#575757"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 11.5L10 10.5"
      stroke="#575757"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SearchIcon;
