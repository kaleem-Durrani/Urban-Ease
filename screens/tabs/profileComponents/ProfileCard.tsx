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
  Divider,
  Center,
} from "@gluestack-ui/themed";

function ProfileCard(props) {
  return (
    <HStack h={"$16"}>
      <View flex={3} justifyContent="center">
        <Icon as={props.icon} size="xl" alignSelf="center" />
      </View>
      <View flex={13} justifyContent="center">
        <Text bold={true} size="md">
          {props.title}
        </Text>
        <Text size="xs" marginRight={"$8"}>
          {props.text}
        </Text>
      </View>
    </HStack>
  );
}

export default ProfileCard;
