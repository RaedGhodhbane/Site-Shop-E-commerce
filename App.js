import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import productsReducer from "./redux/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import store from "./redux/store";
const fetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-BoldItalic": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Semibold": require("./assets/fonts/OpenSans-Semibold.ttf"),
  });
};
// 10
export default function App() {
  const [isReady, setIsReady] = useState(false);
  // const [items, setItems] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
        onError={() => console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
