import { StyleSheet, Text, View } from "react-native";

export const TempCamera = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
