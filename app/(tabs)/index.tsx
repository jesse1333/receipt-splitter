import { CustomTabs } from "@/components/ui/CustomTabs";
import { LogoHeader } from "@/components/ui/LogoHeader";
import { SearchInput } from "@/components/ui/SearchInput";
import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <LogoHeader />
        <SafeAreaView style={styles.container}>
          <View style={{ paddingTop: 30 }}>
            <SearchInput
              showIcon={true}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <CustomTabs
              tabs={["Bill history", "Current trips"]}
              tabIndex={currentTab}
              setTabIndex={setCurrentTab}
            />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
