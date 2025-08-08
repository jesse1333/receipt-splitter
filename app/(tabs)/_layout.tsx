import { BottomNav } from "@/components/ui/BottomNav";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="payments" />
        <Tabs.Screen name="notifications" />
        <Tabs.Screen name="profile" />
      </Tabs>
      <BottomNav />
    </>
  );
}
