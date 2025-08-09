import { LogoHeader } from "@/components/ui/LogoHeader";
import InterFont from "@/components/util/InterFont";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function PaymentsScreen() {
  return (
    <>
      <LogoHeader />
      <SafeAreaView style={styles.container}>
        <InterFont style={styles.title}>Welcome to Receipt Splitter</InterFont>
        <InterFont style={styles.subtitle}>Split your receipts with ease</InterFont>
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
