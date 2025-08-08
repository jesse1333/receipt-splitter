import { LogoHeader } from "@/components/ui/LogoHeader";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function NotificationsScreen() {
  return (
    <>
      <LogoHeader />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to Receipt Splitter</Text>
        <Text style={styles.subtitle}>Split your receipts with ease</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
