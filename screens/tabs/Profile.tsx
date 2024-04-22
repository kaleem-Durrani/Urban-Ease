import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
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
  ScrollView,
  View,
  VStack,
  Divider,
  Center,
} from "@gluestack-ui/themed";
import {
  PenSquare,
  MapPinned,
  CreditCard,
  ShoppingCart,
  Bell,
  ListTodo,
  ShieldAlert,
  MessageSquareText,
} from "lucide-react-native";
import { Image, TouchableOpacity } from "react-native";
import ProfileCard from "./profileComponents/ProfileCard";

function Profile({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <ScrollView>
      <VStack m="$3" flex={1} paddingBottom={"$16"}>
        <HStack h={"$1/6"}>
          {/* Profile Pic */}

          <View
            style={{
              flex: 3,
              overflow: "hidden",
            }}
          >
            <Image
              source={require("../images/categoriesImages/categories-men.jpg")}
              resizeMode="contain"
              style={{ width: "100%", height: "100%", borderRadius: 50 }}
            />
          </View>

          {/* Name and Email Address */}

          <View flex={8} justifyContent="center">
            <Text bold={true} size="lg" marginHorizontal={"$2"}>
              {user.name}
            </Text>
            <Text size="xs" marginHorizontal={"$2"}>
              {user.email}
            </Text>
          </View>

          {/* edit Icon */}
          <View flex={2} alignSelf="center">
            <TouchableOpacity>
              <Icon as={PenSquare} size="xl" alignSelf="center" />
            </TouchableOpacity>
          </View>
        </HStack>

        <Text
          bold={true}
          size="xl"
          marginTop={"$5"}
          marginBottom={"$2"}
          marginLeft={"$4"}
        >
          Account Settings
        </Text>

        <ProfileCard
          icon={MapPinned}
          title="My Address"
          text="Set Shopping delivery address"
        />
        <ProfileCard
          icon={CreditCard}
          title="Payment Method"
          text="Diverse payment method for your convenience"
        />
        <ProfileCard
          icon={ShoppingCart}
          title="My Cart"
          text="Your shopping cart ready for checkout"
        />
        <ProfileCard
          icon={Bell}
          title="Notifications"
          text="Stay in the loop with our latest updates and exclusive offers"
        />
        <ProfileCard
          icon={ListTodo}
          title="My Orders"
          text="In-progress, Completed and Failed Orders"
        />

        <Center>
          <Divider my="$1" h={3} />
        </Center>

        <ProfileCard
          icon={ShieldAlert}
          title="Privacy Policy"
          text="Privacy Policy"
        />
        <ProfileCard
          icon={MessageSquareText}
          title="FAQ"
          text="Ansers to your most frequently asked questions, conveniently provided for your ease"
        />
        <Button
          borderRadius={50}
          mt={"$5"}
          mx={"$3"}
          alignSelf="flex-end"
          onPress={() => navigation.navigate("Settings")}
        >
          <ButtonText>Settings</ButtonText>
        </Button>
      </VStack>
    </ScrollView>
  );
}

export default Profile;
