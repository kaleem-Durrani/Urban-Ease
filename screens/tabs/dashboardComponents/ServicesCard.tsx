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
import { useContext } from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

function ServicesCard(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <HStack h={"$32"} my={"$3"} elevation={5} bg="white">
        <View
          flex={2}
          // bg="red"
          ml={"-$32"}
          borderRadius={60}
          overflow="hidden"
          elevation={5}
        >
          <Image
            //   source={require("../images/dashboardCarouselImages/carouselAd1.jpg")}
            source={props.image}
            resizeMode="cover"
            resizeMethod="resize"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View flex={1} alignItems="center" justifyContent="center">
          <Text bold={true} mx={"$2"} color="#525252">
            {props.description}
          </Text>
        </View>
        <View
          flex={2}
          // bg="blue"
          mr={"-$32"}
          borderRadius={60}
          overflow="hidden"
          elevation={5}
        >
          <Image
            source={props.image}
            resizeMode="cover"
            resizeMethod="resize"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </HStack>
    </TouchableOpacity>
  );
}

export default ServicesCard;
