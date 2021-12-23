import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";
import Colors from "../../global/Colors";
import ProductCart from "./ProductCart";

const Orderitem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  // useEffect();
  // console.log(props.items);
  return (
    <View style={css.container}>
      <View style={css.detail}>
        <Text style={css.amount}>{props.amount.toFixed(2)} € </Text>
        <Text style={css.date}>{props.date}</Text>
      </View>
      <Button
        title={showDetails ? "Hide Details" : "Show Details"}
        onPress={() => setShowDetails((prevState) => !prevState)}
        color={Colors.yellow}
      />
      {showDetails && (
        <View style={{ marginTop: 10 }}>
          {props.items.map((cartItem) => (
            <ProductCart
              key={cartItem.productId}
              image={cartItem.productImage}
              productTitle={cartItem.productTitle}
              quantity={cartItem.quantity}
              productPrice={cartItem.productPrice}
              sum={cartItem.sum}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const css = StyleSheet.create({
  container: {
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
    margin: 18,
    // overflow: "hidden",
    padding: 10,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 18,
  },
  amount: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: Colors.lghitGray,
  },
});

export default Orderitem;
