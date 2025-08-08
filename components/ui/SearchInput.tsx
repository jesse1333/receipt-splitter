import SearchIcon from "@/assets/icons/SearchIcon";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
  showIcon?: boolean;
}

export function SearchInput({
  searchTerm,
  setSearchTerm,
  showIcon,
}: SearchInputProps) {
  return (
    <View style={styles.searchSection}>
      {showIcon && <SearchIcon style={styles.icon} />}
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholderTextColor="#575757"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6565651C",
    borderRadius: 11,
    height: 50,
    width: "90%",
    paddingHorizontal: 13,
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    height: "100%",
    padding: 0,
  },
});
