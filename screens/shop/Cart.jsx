import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
  Animated,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductCart from "../../components/shopComponents/ProductCart";
import Colors from "../../global/Colors";
import { removeProduct } from "../../redux/actions/cart";
import * as orders from "../../redux/actions/order";
export default function Cart(props) {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformcartItems = [];
    for (const key in state.cart.items) {
      transformcartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        productImage: state.cart.items[key].productImage,
        sum: state.cart.items[key].sum,
      });
    }
    return transformcartItems.sort((a, b) =>
      a.productId > b.productId ? -1 : 1
    );
  });
  return (
    <View style={css.container}>
      <View style={css.summary}>
        <Text style={css.summaryText}>
          <Text style={css.total}> Total:</Text>{" "}
          <Text style={css.amount}>{totalAmount.toFixed(2)} € </Text>
        </Text>
        <View style={css.button}>
          <Button
            title="order now"
            color={Colors.lhigtOrange}
            disabled={cartItems.length === 0 ? true : false}
            onPress={() => dispatch(orders.creatOrder(cartItems, totalAmount))}
          />
        </View>
      </View>
      <View style={css.containerList}>
        {cartItems.length === 0 ? (
          <View style={css.isEmpty}>
            <Text style={css.textEmpty}>No Product Yet..?</Text>
            <View style={css.empty}>
              <Image
                fadeDuration={2000}
                style={css.imageEmpty}
                resizeMode="cover"
                source={{
                  uri: "https://etecvn.com/default/template/img/cart-empty.png",
                }}
              />
            </View>
            <View style={css.buttonEmpty}>
              <Button
                color={Colors.yellow}
                title="SHopping"
                onPress={() => props.navigation.navigate("ProductsOverview")}
              />
            </View>
          </View>
        ) : (
          <View style={css.listFlat}>
            <FlatList
              style={css.listitems}
              data={cartItems}
              keyExtractor={(item) => item.productId}
              renderItem={(itemData) => (
                <ProductCart
                  deleteable
                  image={itemData.item.productImage}
                  productTitle={itemData.item.productTitle}
                  quantity={itemData.item.quantity}
                  productPrice={itemData.item.productPrice}
                  sum={itemData.item.sum}
                  productId={itemData.item.productId}
                  onRemove={() =>
                    dispatch(removeProduct(itemData.item.productId))
                  }
                />
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
}
Cart.navigationOptions = {
  title: "My Shop Cart",
};
const css = StyleSheet.create({
  container: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30,
    padding: 10,
    shadowColor: Colors.black,
    shadowRadius: 8,
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 3,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  //   summaryText: {
  //     fontFamily: "OpenSans-Bold",
  //     fontSize: 14,
  //     color: Colors.lghitGray,
  //   },
  total: {
    fontFamily: "OpenSans-BoldItalic",
    fontSize: 16,
    color: Colors.gray,
  },

  amount: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    color: Colors.yellow,
  },
  button: {
    // width: 80,
    //   borderRadius: 10,
    //   overflow:"hidden"
  },
  containerList: {
    alignItems: "center",
    marginVertical: 30,
    width: "100%",
    // justifyContent: "center",
  },
  empty: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.lghitGray,
    overflow: "hidden",
    marginVertical: 20,
  },
  textEmpty: {
    textAlign: "center",
    fontSize: 18,
  },
  imageEmpty: {
    height: "100%",
    width: "100%",
  },
  listFlat: { width: "100%" },
  listitems: {
    width: "100%",
  },
  buttonEmpty: {
    marginVertical: 30,
  },
});
