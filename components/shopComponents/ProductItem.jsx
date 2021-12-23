import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../global/Colors";

export default function ProductItem(props) {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  //useForeground to have effect in all component
  return (
    <View style={css.product}>
      <TouchableComponent onPress={props.onViewdetail} useForeground>
        <View>
          <View style={css.imageContainer}>
            <Image
              resizeMode="contain"
              fadeDuration={400}
              style={css.image}
              source={{ uri: props.image }}
            />
          </View>
          <View style={css.details}>
            <Text style={css.title}>{props.title}</Text>
            <Text style={css.price}>{props.price.toFixed(2)} € </Text>
          </View>
          {/* toFixed  12.900099990  => 12.90 */}
          <View style={css.actionsButtons}>
            <View style={css.button}>
              <Button
                color={Colors.lghitGray}
                title="Details"
                onPress={props.onViewdetail}
              />
            </View>
            <View style={css.button}>
              <Button
                color={Colors.lhigtOrange}
                title="Add To cart"
                onPress={props.onAddToCard}
              />
            </View>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
}
const css = StyleSheet.create({
  product: {
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
    height: 300,
    margin: 18,
    overflow: "hidden",
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 5,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    textTransform: "capitalize",
    fontFamily: "OpenSans-Bold",
  },
  price: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: "OpenSans-Regular",
  },
  actionsButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    marginHorizontal: 20,
  },
  button: {
    width: "48%",
  },
});
