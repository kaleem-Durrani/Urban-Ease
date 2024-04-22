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
import { useNavigation } from "@react-navigation/native";

function ServiceTile({ name, image, navigation }) {
  const { width, height } = Dimensions.get("window");

  const handlePress = () => {
    console.log(name);
    navigation.navigate("SpecificServiceOption", { name: name });
  };
  return (
    <View
      h={height * 0.16}
      w={width * 0.255}
      bg="white"
      m={"$3"}
      elevation={5}
      borderRadius={10}
      overflow="hidden"
    >
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={image}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "80%",
            // flex: 1,
            alignSelf: "center",
          }}
        />
        <Text
          //   fontSize={name.legnth > 12 ? "$xs" : "$xs"}
          color="gray"
          size="xs"
          bold={true}
          alignSelf="center"
          //   flex={1}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ServiceTile;
