import { View, Text, KeyboardAvoidingView, Icon } from "@gluestack-ui/themed";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discover from "./tabs/Discover";
import Orders from "./tabs/Orders";
import Notifications from "./tabs/Notifications";
import Profile from "./tabs/Profile";
import Dashboard from "./tabs/Dashboard";
import { Platform } from "react-native";
import {
  BellIcon,
  CircleUserRound,
  HeartIcon,
  HomeIcon,
  LayoutDashboard,
  UserRound,
  NotebookPen,
} from "lucide-react-native";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderRadius: 50,
          marginHorizontal: "2%",
          marginBottom: "2%",
          paddingHorizontal: "1%",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          let focusedSize;
          if (route.name === "Dashboard") {
            icon = HomeIcon;
            focusedSize = focused ? size : "lg";
          } else if (route.name === "Discover") {
            icon = LayoutDashboard;
            focusedSize = focused ? size : "lg";
          } else if (route.name === "Orders") {
            icon = NotebookPen;
            focusedSize = focused ? size : "lg";
          } else if (route.name === "Notifications") {
            icon = BellIcon;
            focusedSize = focused ? size : "lg";
          } else if (route.name === "Profile") {
            icon = CircleUserRound;
            focusedSize = focused ? size : "lg";
          }
          return <Icon as={icon} size={focusedSize} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
