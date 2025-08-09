import { Pressable, StyleSheet, View } from "react-native";
import InterFont from "../util/InterFont";

interface CustomTabsProps {
  tabs: string[];
  tabIndex: number;
  setTabIndex: (index: number) => void;
}

export const CustomTabs = ({
  tabs,
  tabIndex,
  setTabIndex,
}: CustomTabsProps) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, idx) => {
        return (
          <Pressable
            key={idx}
            onPress={() => {
              setTabIndex(idx);
            }}>
            <InterFont style={styles.text}>{tab}</InterFont>
          </Pressable>
        );
      })}

      <View style={[
        styles.selectedTabIndicator,
        {
          left: `${(tabIndex / tabs.length) * 100}%`,
          width: tabs.length * 40,            // WORK ON THIS TOMORROW
        }
      ]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    paddingTop: 20,
    paddingBottom: 5, 
    borderBottomColor: "#D6D6D6",
    borderBottomWidth: 1,
  },

  text: {
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "600",
    color: "#575757",
  },

  selectedTabIndicator: {
    borderBottomColor: "#62C67F",
    borderBottomWidth: 2,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  }
});
