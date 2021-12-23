import React from "react";
import Colors from "../../global/Colors";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBotton from "../../components/UI/HeaderButton";

export default function Productdetails(props) {
  const dispatch = useDispatch();

  const productID = props.navigation.getParam("prodID");
  const selectProduct = useSelector((state) =>
    state.products.availableProducts.find((p) => p.id === productID)
  );

  //   console.log(selectProduct);
  return (
    <ScrollView>
      <View>
        <Image style={css.image} source={{ uri: selectProduct.imageUrl }} />
        <View style={css.buttonContainer}>
          <View style={css.buttonSubContainer}>
            <Button
              color={Colors.lhigtOrange}
              title="Add to Card"
              onPress={() => {
                dispatch(cartActions.addToCart(selectProduct));
              }}
            />
          </View>
        </View>

        <Text style={css.price}>{selectProduct.price.toFixed(2)} € </Text>
        <Text style={css.description}>{selectProduct.description}</Text>
      </View>
    </ScrollView>
  );
}
Productdetails.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("prodTitle"),
    headerRight: () => (
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
  image: {
    width: "100%",
    height: 300,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    width: "70%",
    marginTop: 20,
    marginHorizontal: "15%",
  },
  buttonSubContainer: {
    width: "100%",
  },
  price: {
    fontSize: 22,
    color: Colors.gray,
    textAlign: "center",
    marginVertical: 18,
    fontFamily: "OpenSans-Bold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "OpenSans-Regular",
  },
});
