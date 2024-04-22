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
  set,
} from "@gluestack-ui/themed";
import { Image, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { services } from "./constants/Constants";
import ProductCard from "./tabs/dashboardComponents/ProductCard";

function SpecificServiceOption({ route, navigation }) {
  const { name } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [displayServices, setDisplayServices] = useState([]);

  const currentServices = services.filter((item) => item.serviceFrom === name);

  useEffect(() => {
    navigation.setOptions({
      title: name + " Services",
    });
    setDisplayServices(currentServices);
  }, [name]);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    let filteredServices;

    if (text === "") {
      filteredServices = currentServices;
    } else {
      filteredServices = currentServices.filter((item) =>
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
      <VStack my={"$3"}>
        <Text bold={true} color="darkblue">
          All Services
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

export default SpecificServiceOption;
