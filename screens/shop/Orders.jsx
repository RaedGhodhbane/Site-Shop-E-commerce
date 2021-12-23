import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Orderitem from "../../components/shopComponents/OrderItem";
import { useSelector } from "react-redux";
export default function Orders() {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <View style={css.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Orderitem
            date={itemData.item.readableDate}
            amount={itemData.item.totalAmount}
            items={itemData.item.items}
          />
        )}
      />
    </View>
  );
}

Orders.navigationOptions = ({ navigation }) => ({
  title: "Orders",
  hedearLeft: () => (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Ionicons name="menu" size={25} color={Colors.white} />
    </TouchableOpacity>
  ),
});

const css = StyleSheet.create({ container: {} });
