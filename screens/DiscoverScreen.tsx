import React, { useState, useEffect } from "react";
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
import { FlatList } from "react-native";
import CategoryScroll from "./tabs/dicoverComponents/CategoryScroll";
import { services } from "./constants/Constants";
import ProductCard from "./tabs/dashboardComponents/ProductCard";

function DiscoverScreen() {
  // const { name } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [displayServices, setDisplayServices] = useState([]);

  useEffect(() => {
    setDisplayServices(services);
  }, []);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    let filteredServices;

    if (text === "") {
      filteredServices = services;
    } else {
      filteredServices = services.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
    }

    setDisplayServices(filteredServices);
  };

  return (
    <VStack m={"$3"}>
      <View>
        <Input>
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => {
              handleSearchChange(text);
            }}
          />
        </Input>
      </View>
      <VStack my={"$1"} mb={"$40"}>
        <Text my={"$3"} bold={true} color="darkblue">
          All Services Available In The App
        </Text>

        <FlatList
          data={displayServices}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              shopkeeper={item.shopkeeper}
              sale={item.sale}
              image={item.image}
              price={item.price}
            />
          )}
        />
      </VStack>
    </VStack>
  );
}

export default DiscoverScreen;
