import React from "react";
import {
  View,
  FlatList,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ProductItem from "../../components/shopComponents/ProductItem";
import * as cartActions from "../../redux/actions/cart";
import CustomHeaderBotton from "../../components/UI/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../global/Colors";

function ProductsOverview(props) {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const onViewdetail = (itemData) => {
    props.navigation.navigate("Productdetails", {
      prodID: itemData.item.id,
      prodTitle: itemData.item.title,
    });
  };
  const onAddToCard = (itemData) => {
    // console.log(itemData.item);
    dispatch(cartActions.addToCart(itemData.item));
  };
  // console.log(products);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewdetail={() => onViewdetail(itemData)}
            onAddToCard={() => onAddToCard(itemData)}
          />
        )}
      />
    </View>
  );
}
ProductsOverview.navigationOptions = ({ navigation }) => {
  const titlescreen = "All Products";
  return {
    headerTitle: titlescreen,
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={CustomHeaderBotton}>
    //     <Item
    //       title="menu"
    //       iconName={Platform.OS === "android" ? "menu" : "menu"}
    //       onPress={() => navigation.toggleDrawer()}
    //     />
    //   </HeaderButtons>
    // ),
    headerRight: () => (
      // <TouchableOpacity
      //   style={css.navigate}
      //   onPress={() => console.log(navigation.navigate("Cart"))}
      // >
      //   <Ionicons name="cart" size={23} color={Colors.white} />
      // </TouchableOpacity>
      <HeaderButtons HeaderButtonComponent={CustomHeaderBotton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "cart" : "cart"}
          onPress={() => navigation.navigate("Cart")}
        />
      </HeaderButtons>
    ),
  };
};

const css = StyleSheet.create({
  navigate: {
    marginRight: 5,
    marginLeft: 5,
  },
});

export default ProductsOverview;
