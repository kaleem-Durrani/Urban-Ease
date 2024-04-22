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
import { useContext } from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import CatogoriesCard from "./dashboardComponents/CategoriesCard";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "./dashboardComponents/CarouselCard";
import { categories, featured, products } from "../constants/Constants";
import ProductCard from "./dashboardComponents/ProductCard";
import ServicesCard from "./dashboardComponents/ServicesCard";

function Dashboard({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const { width, height } = Dimensions.get("window");

  const handleLogOutPress = () => {
    setUser(null);
  };

  const handleCardPress = (location) => {
    navigation.navigate("ServiceTypesScreen", { title: location });
  };

  // const handleCategoryPress = (category) => {
  //   navigation.navigate(category);
  // };

  return (
    // <ScrollView>
    <View mt={"$10"} p={"$2"} flex={1} flexDirection={"column"}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Search and bell Icon */}

        <HStack marginHorizontal={"$3"} my={"$1"} p={"$2"}>
          <View
            p={"$1"}
            flex={1}
            bg="white"
            mr={"$3"}
            elevation={5}
            borderRadius={10}
          >
            <Select flex={1}>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select A City" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Karachi" value="karachi" />
                  <SelectItem label="Lahore" value="lahore" />
                  <SelectItem label="Islamabad" value="islamabad" />
                  <SelectItem label="Quetta" value="quetta" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </View>
          {/* <Input flex={1} mr={"$3"}>
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField placeholder="Search..." />
          </Input> */}
          <TouchableOpacity
            style={{ borderWidth: 1, borderColor: "black", borderRadius: 10 }}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Icon as={BellIcon} size="xl" m="$2" mt={"$2.5"} />
          </TouchableOpacity>
        </HStack>

        {/* categories text view all text */}

        <HStack
          marginHorizontal={"$3"}
          mb={"$1"}
          justifyContent="space-between"
        >
          <Text>Catogories</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Text style={{ color: "blue" }}>View all</Text>
          </TouchableOpacity>
        </HStack>

        {/* category cards round */}

        <View marginHorizontal={"$3"} mb={"$2"}>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <VStack key={item.id}>
                <CatogoriesCard image={item.image} name={item.name} />
                <Text alignSelf="center">{item.name}</Text>
              </VStack>
            )}
            contentContainerStyle={{ padding: "1%" }}
          />
        </View>

        {/* Snap carousel for Ads */}

        <View h={height * 0.25} mb={"$3"}>
          <Carousel
            //   layout="stack"
            // layoutCardOffset={`50`}
            containerCustomStyle={{ overflow: "visible" }}
            data={items}
            renderItem={({ item }) => <CarouselCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.5}
            inactiveSlideScale={0.8}
            sliderWidth={width * 0.95}
            itemWidth={width * 0.7}
            loop={true}
            slideStyle={{
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
            }}
            autoplay={true}
            autoplayInterval={5000}
          />
        </View>

        {/* Featured Products list */}

        {/* <Text ml={"$3"} mt={"$3"} mb={"$1"} bold={true}>
          Featured
        </Text>

        <View ml="$3" mr={"$3"}>
          <FlatList
            horizontal
            data={products.filter((item) => item.featured)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.itemName}
                shopkeeper={item.shopkeeper}
                sale={item.sale}
                image={item.image}
                price={item.price}
              />
            )}
          />

        {/* Logout Button */}

        <ServicesCard
          onPress={() => handleCardPress("Home Appliance Maintenance")}
          image={require("../images/servicesImages/services-tools.jpg")}
          description={"       Home\n   Appliance\nMaintenance"}
        />
        <ServicesCard
          onPress={() => handleCardPress("Beauty And Personal Care")}
          image={require("../images/servicesImages/services-beauty.jpg")}
          description={"     Beauty &\nPersonal Care"}
        />
        <ServicesCard
          onPress={() => handleCardPress("Tailoring")}
          image={require("../images/servicesImages/services-tailoring.jpg")}
          description={"Tailoring\nServices"}
        />
        <ServicesCard
          onPress={() => handleCardPress("Vehicle Maintenance")}
          image={require("../images/servicesImages/services-cars.jpg")}
          description={"     Vehicle\nMaintenance"}
        />
        <ServicesCard
          onPress={() => handleCardPress("Attire Renting")}
          image={require("../images/servicesImages/services-renting.jpg")}
          description={"  Attire\nRenting"}
        />

        <Button m="$3" onPress={handleLogOutPress}>
          <ButtonText>Log Out</ButtonText>
        </Button>
      </ScrollView>
    </View>
  );
}

export default Dashboard;

const items = [
  {
    id: 1,
    name: "Ad 1",
    image: require("../images/dashboardCarouselImages/carouselAd1.jpg"),
  },
  {
    id: 2,
    name: "Ad 2",
    image: require("../images/dashboardCarouselImages/carouselAd2.jpg"),
  },
  {
    id: 3,
    name: "Ad 3",
    image: require("../images/dashboardCarouselImages/carouselAd3.jpg"),
  },
];
