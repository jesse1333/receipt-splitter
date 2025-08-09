import React from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export function LogoHeader() {
  return ( 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <SafeAreaView style={styles.safeContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/app-icon.png")}
            />
          </SafeAreaView>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "18%",

  },
  safeContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    bottom: 10
  },
});
