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
  Center,
  Divider,
} from "@gluestack-ui/themed";
import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";

function OrderCard() {
  const { width, height } = Dimensions.get("window");

  return (
    <HStack
      h={height * 0.18}
      bg="white"
      borderRadius={20}
      overflow="hidden"
      my={"$2"}
      elevation={5}
      mx={"$2"}
    >
      <View flex={2}>
        <Image
          source={require("../../images/specificServices/customFurniture.jpg")}
          resizeMode="contain"
          style={{ width: "100%", height: "80%" }}
        />
        <Text color="darkblue" alignSelf="center">
          Custom Furniture
        </Text>
      </View>
      <View flex={3} ml={"$3"} mt={"$1"}>
        <HStack justifyContent="space-between" mr={"$2"}>
          <Text>Ordered at</Text>
          <Text> 21st Jan</Text>
        </HStack>
        <Center>
          <Divider my="$0.5" />
        </Center>
        <HStack justifyContent="space-between" mr={"$2"}>
          <Text>Amount</Text>
          <Text color="blue"> 1000</Text>
        </HStack>
        <Center>
          <Divider my="$0.5" />
        </Center>
        <HStack justifyContent="space-between" mr={"$2"}>
          <Text>Status</Text>
          <Text color="green"> Completed</Text>
        </HStack>
        <Center>
          <Divider my="$0.5" />
        </Center>
        <HStack justifyContent="space-between" mr={"$2"}>
          <Text>Order fulfilled by</Text>
          <Text> Person 1</Text>
        </HStack>
      </View>
    </HStack>
  );
}

export default OrderCard;
