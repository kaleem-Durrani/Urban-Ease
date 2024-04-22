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
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { PlusSquare, CheckCircle2 } from "lucide-react-native";
import React from "react";
import { useContext } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import { addToWishlist } from "../../database/Database";
import { AuthContext } from "../../contexts/AuthContext";

const { width, height } = Dimensions.get("window");

function ProductCard(props: any) {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const handleHeartPress = () => {
    addToWishlist(props.id, 1);
  };

  const handlePress = () => {
    if (user) {
      // console.log("cardPressed");
      navigation.navigate("Service Detail", {
        id: props.id,
        name: props.name,
        sale: props.sale,
        shopkeeper: props.shopkeeper,
        image: props.image,
        price: props.price,
      });
    } else {
      Alert.alert(
        "Not logged in",
        "this is preview only log in to use Services"
      );
    }
  };

  return (
    <View style={styles.container} elevation={3}>
      {/* <TouchableOpacity onPress={handlePress}> */}
      <Image source={props.image} style={styles.image} resizeMode="center" />
      {/* Badge text in top-left corner */}
      <Text
        style={[
          styles.badge,
          {
            backgroundColor:
              props.sale > 0 ? "rgba(250,244,62,0.8)" : "transparent",
          },
        ]}
      >
        {props.sale > 0 ? props.sale + "%" : null}
      </Text>

      {/* Icon in top-right corner */}
      {/* <TouchableOpacity style={styles.icon} onPress={handleHeartPress}>
        <Icon as={FavouriteIcon} size="xl" color="red" />
      </TouchableOpacity> */}

      {/* Text for Product name */}
      <Text px={"$3"} bold={true} size="sm">
        {props.name}
      </Text>

      {/*text for shop or brand name */}
      <HStack px={"$3"}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text size="xs" color="gray">
            {props.shopkeeper}
          </Text>

          <Icon
            mt={"$1"}
            ml={"$1"}
            as={CheckCircle2}
            size="xs"
            fill={"blue"}
            color="white"
          />
        </TouchableOpacity>
      </HStack>

      {/* price and add button */}
      <HStack justifyContent="space-between" px={"$3"} mt={"$2.5"}>
        <Text>
          {props.price} {" Rs"}
        </Text>
        <TouchableOpacity onPress={handlePress}>
          <Icon as={PlusSquare} size="xl" color="blue" />
        </TouchableOpacity>
      </HStack>
      {/* </TouchableOpacity> */}
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: width * 0.4,
    height: height * 0.3,
    borderRadius: 30,
    overflow: "hidden",
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.01,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 10,
    color: "black",
  },
  // icon: {
  //   position: "absolute",
  //   top: 10,
  //   right: 10,
  // },
  text: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});
