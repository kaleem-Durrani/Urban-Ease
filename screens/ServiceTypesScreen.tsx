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
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import React from "react";
import { useContext, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { serviceTiles } from "./constants/Constants";
import ServiceTile from "./components/serviceTypeScreenComponents/ServiceTile";

function ServiceTypeScreen({ route, navigation }) {
  const { title } = route.params;

  // Find the image object based on the title
  const selectedImage = images.find((image) => image.name === title);

  const filteredServiceTiles = serviceTiles.filter(
    (tile) => tile.category === title
  );

  const renderItem = ({ item }) => (
    <ServiceTile
      name={item.name}
      image={item.image}
      navigation={navigation}
      route={route}
    />
  );

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title]);
  return (
    <VStack p={"$3"} flex={1}>
      <View bg="green" h={"$2/5"} elevation={7} mb={"$2"}>
        <Image
          source={selectedImage?.image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      {/* Render the filtered serviceTiles using FlatList */}
      {/* <View> */}
      <FlatList
        data={filteredServiceTiles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
      {/* </View> */}
    </VStack>
  );
}

export default ServiceTypeScreen;

const images = [
  {
    id: 1,
    name: "Home Appliance Maintenance",
    image: require("./images/serviceTypeScreenImages/maintenance.jpeg"),
  },
  {
    id: 2,
    name: "Beauty And Personal Care",
    image: require("./images/serviceTypeScreenImages/beautyAndPersonalCare.jpg"),
  },
  {
    id: 3,
    name: "Tailoring",
    image: require("./images/serviceTypeScreenImages/tailoring.jpg"),
  },
  {
    id: 4,
    name: "Vehicle Maintenance",
    image: require("./images/serviceTypeScreenImages/carMaintenance.jpg"),
  },
  {
    id: 5,
    name: "Attire Renting",
    image: require("./images/serviceTypeScreenImages/attireRenting.jpg"),
  },
];
