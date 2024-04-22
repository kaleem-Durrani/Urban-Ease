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
import { TouchableOpacity, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
function AppTypeSelection({ navigation }) {
  const handleCustomerPress = () => {
    navigation.navigate("Login");
  };

  const handleSellerPress = () => {
    navigation.navigate("Seller");
  };

  return (
    <View>
      <Text mt={"$16"} alignSelf="center" mb={"$10"}>
        I want to use Urban Ease App as a?
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleCustomerPress}>
        <Text style={styles.buttonText}>Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSellerPress}>
        <Text style={styles.buttonText}>Seller</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.4,
    height: height * 0.17,
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightblue",
    borderWidth: 2,
    alignSelf: "center",
    elevation: 5,
  },
  buttonText: {
    // color: "white",
  },
});

export default AppTypeSelection;
