import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../global/Colors";

export default function ProductCart(props) {
  const { image, productTitle, quantity, productPrice, sum, onRemove } = props;
  return (
    <View style={css.container}>
      <View style={css.rowItem}>
        <View style={css.containerImage}>
          <Image source={{ uri: image }} style={css.image} />
        </View>
        <View>
          <Text style={{ ...css.textBlock }}>
            <Text style={css.italick}>Title : </Text> {productTitle}
          </Text>
          <Text style={{ ...css.textBlock }}>
            <Text style={css.italick}>Unit Price : </Text>
            {productPrice.toFixed(2)} €
          </Text>
          <Text style={{ ...css.textBlock }}>
            <Text style={css.italick}>Quantity : </Text> {quantity}
          </Text>
          <Text style={{ ...css.textBlock }}>
            <Text style={css.italick}>Tot Price : </Text> {sum.toFixed(2)} €
          </Text>
        </View>
        {props.deleteable && (
          <TouchableOpacity style={css.delete} onPress={onRemove}>
            <Ionicons
              size={21}
              color={Colors.red}
              name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            />
            <Text style={css.textDelete}>DELETE</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const css = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  rowItem: {
    flexDirection: "row",
    backgroundColor: Colors.whiteLight,
    justifyContent: "space-between",
  },
  containerImage: {
    height: 100,
    width: 100,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textBlock: {
    marginVertical: 2,
    // marginLeft: 4,
  },
  delete: {
    textAlign: "center",
    // backgroundColor: "red",
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  textDelete: {
    fontSize: 12,
    marginTop: 4,
  },
  italick: {
    fontFamily: "OpenSans-BoldItalic",
    fontSize: 13,
  },
});
