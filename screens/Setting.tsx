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
  Center,
  Divider,
} from "@gluestack-ui/themed";
import { Image, Dimensions, TouchableOpacity } from "react-native";
import {
  Headphones,
  ListChecks,
  ListChecksIcon,
  LogIn,
  Smartphone,
} from "lucide-react-native";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function Setting() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <VStack m={"$10"}>
      <TouchableOpacity>
        <HStack my={"$4"} bg="white" p={"$2"} elevation={3}>
          <Icon as={LogIn} size="xl" color="#1A91FF" />
          <Text ml={"$5"}>Login</Text>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack my={"$4"} bg="white" p={"$2"} elevation={3}>
          <Icon as={Smartphone} size="xl" color="#1A91FF" />
          <Text ml={"$5"}>Register</Text>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack my={"$4"} bg="white" p={"$2"} elevation={3}>
          <Icon as={Headphones} size="xl" color="#1A91FF" />
          <Text ml={"$5"}>Customer Support</Text>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack my={"$4"} bg="white" p={"$2"} elevation={3}>
          <Icon as={ListChecksIcon} size="xl" color="#1A91FF" />
          <Text ml={"$5"}>Terms & Conditions</Text>
        </HStack>
      </TouchableOpacity>

      <Center my={"$4"}>
        <Divider my="$1" height={"$1"} />
      </Center>
      <TouchableOpacity>
        <HStack my={"$4"} bg="white" p={"$2"} elevation={3}>
          <Icon as={Smartphone} size="xl" color="#1A91FF" />
          <Text ml={"$5"}>Login as a Professional for Free</Text>
        </HStack>
      </TouchableOpacity>

      <Button mx={"$24"} my={"$4"} bg="#1A91FF" onPress={() => setUser(null)}>
        <ButtonText>Log Out</ButtonText>
      </Button>
    </VStack>
  );
}

export default Setting;
