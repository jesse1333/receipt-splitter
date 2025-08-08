import React from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export function LogoHeader() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/app-icon.png")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 10,
  },
});
