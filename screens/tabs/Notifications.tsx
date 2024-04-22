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
import NotificationsCard from "./notificationComponents/NotificationsCard";

function Notifications() {
  return (
    <View my={"$1"}>
      <ScrollView>
        <NotificationsCard
          image={require("../images/dashboardCarouselImages/carouselAd1.jpg")}
        />
        <NotificationsCard
          image={require("../images/dashboardCarouselImages/carouselAd2.jpg")}
        />
        <NotificationsCard
          image={require("../images/dashboardCarouselImages/carouselAd3.jpg")}
        />
      </ScrollView>
    </View>
  );
}

export default Notifications;
