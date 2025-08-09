import { ReactNode } from "react";
import { Text, TextProps } from "react-native";

interface InterFontProps extends Omit<TextProps, 'children'> {
  children: ReactNode;
}

const InterFont = ({ children, style, ...props }: InterFontProps) => {
  return (
    <Text style={[{ fontFamily: "Inter" }, style]} {...props}>
      {children}
    </Text>
  );
};

export default InterFont;