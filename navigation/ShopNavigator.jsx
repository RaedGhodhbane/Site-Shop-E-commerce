import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import ProductsOverview from "../screens/shop/ProductsOverview";
import Productdetails from "../screens/shop/Productdetails";
import Colors from "../global/Colors";
import { Platform, Text } from "react-native";
import Cart from "../screens/shop/Cart";
import Order from "../screens/shop/Orders";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBotton from "../components/UI/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import Authscreen from "../screens/user/AuthScreen";
const defaultNavigationOptions = (props) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderBotton}>
      <Item
        title="menu"
        iconName={Platform.OS === "android" ? "menu" : "menu"}
        onPress={() => props.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.orange : Colors.yellow,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontFamily: "OpenSans-Bold",
  },
  headerBackTitleStyle: {
    fontFamily: "OpenSans-Regular",
  },
});

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductsOverview,
    },
    Productdetails: {
      screen: Productdetails,
    },
    Cart: {
      screen: Cart,
    },
    // Order: {
    //   screen: Order,
    // },
  },
  {
    initialRouteName: "ProductsOverview",
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const orderNavigators = createStackNavigator(
  {
    Orders: {
      screen: Order,
    },
  },
  {
    // navigationOptions: {
    //   drawerIcon: (drawerConfig) => (
    //     <Ionicons
    //       name={(Platform.OS = "android" ? "md-create" : "ios-create")}
    //       size={23}
    //       color={drawerConfig.tintColor}
    //     />
    //   ),
    // },
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: orderNavigators,
  },
  {
    drawerPosition: "left",
    contentOptions: {
      activeTintColor: Colors.orange,
      itemsContainerStyle: {
        marginVertical: 70,
        // padding: 10,
      },
    },
  }
);
const AuthNavigator = createStackNavigator({
  Auth: Authscreen,
});
const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Shop: ShopNavigator,
});

export default createAppContainer(MainNavigator);
