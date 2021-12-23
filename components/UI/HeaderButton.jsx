import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../global/Colors";
import { Platform, StyleSheet } from "react-native";
export default function CustomHeaderBotton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={Platform.OS === "android" ? colors.white : colors.lghitGray}
      style={css.button}
    />
  );
}

const css = StyleSheet.create({
  button: {
    // backgroundColor: "#fff",
    // borderRadius: 50,
    // alignItems: "center",
  },
});
