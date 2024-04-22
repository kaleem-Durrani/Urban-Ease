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
  FavouriteIcon,
  CheckCircleIcon,
} from "@gluestack-ui/themed";
import { PlusSquare } from "lucide-react-native";
import { Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { products } from "../../constants/Constants";

function WishListCard() {
  const p1 = products[0];
  const { width, height } = Dimensions.get("window");
  return (
    <HStack
      borderRadius={20}
      overflow="hidden"
      m={"$3"}
      h={height * 0.2}
      bg="white"
      mt={"$1"}
    >
      {/* image sale badge and geart icon */}
      <View w={"40%"}>
        <Image source={p1.image} style={styles.image} resizeMode="contain" />
        <Text
          style={[
            styles.badge,
            {
              backgroundColor:
                p1.sale > 0 ? "rgba(250,244,62,0.8)" : "transparent",
            },
          ]}
        >
          {p1.sale > 0 ? p1.sale + "%" : null}
        </Text>
        {/* Icon in top-right corner */}
        <TouchableOpacity style={styles.icon}>
          <Icon as={FavouriteIcon} size="xl" color="red" />
        </TouchableOpacity>
      </View>

      {/* item name shopname and buy button */}
      <View flex={1} justifyContent="space-between">
        <View>
          {/* Text for Product name */}
          <Text px={"$3"} bold={true} size="lg">
            {p1.itemName}
          </Text>

          {/*text for shop or brand name */}
          <HStack px={"$3"}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Text size="xs" color="gray">
                {p1.shopkeeper}
              </Text>

              <Icon
                mt={"$1"}
                ml={"$1"}
                as={CheckCircleIcon}
                size="xs"
                fill={"blue"}
                color="white"
              />
            </TouchableOpacity>
          </HStack>
        </View>

        {/* price and add button */}
        <HStack
          justifyContent="space-between"
          px={"$3"}
          alignItems="center"
          mr={"$2"}
        >
          {p1.sale > 0 ? (
            <HStack alignItems="center">
              <Text color="gray" size="sm" strikeThrough={true}>
                {p1.price + " Rs"}
              </Text>
              <Text bold={true} size="lg">
                {" " + p1.price * (1 - p1.sale / 100) + " Rs"}
              </Text>
            </HStack>
          ) : (
            <Text bold={true} size="lg">
              {p1.price}
            </Text>
          )}
          <TouchableOpacity>
            <Icon as={PlusSquare} size="xl" color="blue" />
          </TouchableOpacity>
        </HStack>
      </View>
    </HStack>
  );
}

export default WishListCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 10,
    color: "black",
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  text: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});
