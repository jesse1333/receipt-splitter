import HomeIcon from "@/assets/icons/HomeIcon";
import NotificationsIcon from "@/assets/icons/NotificationsIcon";
import PaymentsIcon from "@/assets/icons/PaymentsIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import * as Haptics from "expo-haptics";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

export const BottomNav = (style: StyleProp<ViewStyle>) => {
  const router = useRouter();
  const pathname = usePathname();

  const buttons = [
    { Icon: HomeIcon, index: 0, route: "/" as const },
    { Icon: PaymentsIcon, index: 1, route: "/payments" as const },
    { Icon: NotificationsIcon, index: 2, route: "/notifications" as const },
    { Icon: ProfileIcon, index: 3, route: "/profile" as const },
  ];

  const getSelectedIndex = () => {
    const currentButton = buttons.find(btn => btn.route === pathname);
    return currentButton ? currentButton.index : 0;
  };

  const selected = getSelectedIndex();

  return (
    <View style={styles.NavContainer}>
      {buttons.map((btn, idx) => {
        const isSelected = selected === idx;
        const color = isSelected ? "#02A130" : "#737373";
        const IconComponent = btn.Icon;

        return (
          <Pressable
            key={idx}
            style={styles.NavButton}
            onPress={() => {
              router.navigate(btn.route);
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <View style={styles.IconWrapper}>
              <IconComponent color={color} />
              {isSelected && <View style={styles.GreenOverlay} />}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  NavContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    borderRadius: 40,
    justifyContent: "space-evenly",
    width: "90%",
    alignSelf: "center",
  },

  NavButton: {
    padding: 6,
  },

  IconWrapper: {
    position: "relative",
    borderRadius: 999,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  GreenOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: -10,
    right: -10,
    backgroundColor: "#62C67F33",
    borderRadius: 9999,
  },
});
