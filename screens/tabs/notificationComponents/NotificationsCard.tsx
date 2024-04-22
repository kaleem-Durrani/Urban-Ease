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
import { Image, Dimensions } from "react-native";

function NotificationsCard({ image }) {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      h={height * 0.3}
      mx={"$4"}
      my={"$1"}
      elevation={5}
      p={"$1"}
      bg="white"
    >
      <Image
        source={image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="stretch"
      />
    </View>
  );
}

export default NotificationsCard;
