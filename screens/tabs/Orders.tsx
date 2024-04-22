import React from "react";
import {
  Button,
  ButtonText,
  HStack,
  Text,
  Input,
  InputSlot,
  InputField,
  InputIcon,
  SearchIcon,
  Icon,
  BellIcon,
  ScrollView,
  View,
  VStack,
} from "@gluestack-ui/themed";
import WishListCard from "./wishListComponents/wishListCard";
import OrderCard from "./ordersComponents/OrderCard";

function Orders() {
  return (
    <VStack m={"$2"}>
      <ScrollView>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </VStack>
  );
}

export default Orders;
