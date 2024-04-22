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
  FlatList,
} from "@gluestack-ui/themed";
import ProductCard from "../dashboardComponents/ProductCard";

function CategoryScroll(props) {
  // console.log(props.list);
  return (
    <VStack>
      <Text size="lg" fontWeight="bold" mx={"$4"}>
        {props.title}
      </Text>
      <FlatList
        horizontal
        data={props.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.itemName}
            shopkeeper={item.shopkeeper}
            sale={item.sale}
            image={item.image}
            price={item.price}
          />
        )}
        mb={"$4"}
        pb={"$1"}
      />
    </VStack>
  );
}

export default CategoryScroll;
