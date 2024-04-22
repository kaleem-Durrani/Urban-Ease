import React, { useState } from "react";
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
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Textarea,
  FormControlHelper,
  FormControlHelperText,
  TextareaInput,
  CalendarDaysIcon,
  Heading,
  FormControlErrorIcon,
  AlertIcon,
} from "@gluestack-ui/themed";
import { Image, Dimensions, TouchableOpacity } from "react-native";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  HeartIcon,
  MinusSquare,
  PlusSquare,
  StarIcon,
} from "lucide-react-native";
import MyDatePicker from "./components/serviceDetailComponents/DatePicker";

function ServiceDetail({ route }) {
  const { id, name, sale, shopkeeper, image, price } = route.params;
  const { width, height } = Dimensions.get("window");

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // const sizes = ["XL", "L", "M", "S", "XS"];

  // const handleQuantityChange = (changeType) => {
  //   // changeType can be 'increase' or 'decrease'
  //   if (changeType === "increase") {
  //     setQuantity(quantity + 1);
  //   } else if (changeType === "decrease" && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  return (
    <View mx={"$3"}>
      <ScrollView h={"90%"} mb>
        {/* Top Image */}
        <View
          h={height * 0.35}
          w={"100%"}
          bg="white"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            source={image}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>

        {/* Item Name */}
        <Text size="lg" bold={true}>
          {name}
        </Text>

        {/* Item Star Rating and Heart  */}
        <HStack justifyContent="space-between" my={"$2"}>
          <HStack>
            <Icon as={StarIcon} color="#fde047" fill={"#fde047"} size="lg" />
            <Text size="sm" mx={"$3"} color="gray">
              4.7 {"(213)"}
            </Text>
          </HStack>
          <TouchableOpacity>
            <Icon as={HeartIcon} size="lg" color="red" mr={"$3"} />
          </TouchableOpacity>
        </HStack>

        {/* Sale */}
        {sale > 0 ? (
          <HStack alignItems="center" my={"$2"}>
            <Text size="sm" bg="rgba(250,244,62,0.8)">
              {" "}
              {sale + "% "}
            </Text>
            <Text mx={"$3"} strikeThrough={true}>
              {price + " Rs"}
            </Text>
            <Text size="lg" bold={true}>
              {price - price * (sale / 100) + " Rs"}
            </Text>
          </HStack>
        ) : (
          <Text my={"$3"}>{price + " Rs"}</Text>
        )}

        {/* Select Size */}

        {/* <Text size="lg" bold={true}>
          Select Size
        </Text> */}

        {/* <HStack my={"$2"} mx={"$3"}>
          {sizes.map((item) => (
            <TouchableOpacity key={item} onPress={() => setSize(item)}>
              <Text
                textAlign="center"
                borderRadius={8}
                elevation={5}
                w={"$7"}
                bg={size === item ? "#CAFFE8" : "white"}
                mx={"$1.5"}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </HStack> */}

        {/* Quantity selection and total price */}

        {/* <Text bold={true} size="lg" mt={"$3"}>
          Quantity
        </Text> */}

        {/* <HStack justifyContent="space-between" my={"$3"}>
          <Text bold={true}>Total: {price * quantity} Rs</Text>
          <HStack>
            <TouchableOpacity onPress={() => handleQuantityChange("decrease")}>
              <Icon as={MinusSquare} size="xl" color="blue" />
            </TouchableOpacity>
            <Text mx={"$3"}>{quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange("increase")}>
              <Icon as={PlusSquare} size="xl" color="blue" />
            </TouchableOpacity>
          </HStack>
        </HStack> */}

        {/* <Text>{id}</Text>
      <Text>{sale}</Text>
      <Text>{shopkeeper}</Text> */}

        {/* input area for location */}

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Location</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput />
          </Textarea>
          <FormControlHelper>
            <FormControlHelperText>
              Enter full detailed location above
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        {/* input area for service time and date */}

        <HStack my={"$5"}>
          <VStack flex={1} mx={"$3"}>
            <Heading size="sm">Service Date</Heading>
            <Input>
              <InputSlot pl="$3">
                <InputIcon as={CalendarDaysIcon} />
              </InputSlot>
              <InputField placeholder="Enter Date" inputMode="numeric" />
            </Input>
          </VStack>
          <VStack flex={1}>
            <Heading size="sm">Service Time</Heading>
            <Input>
              <InputSlot pl="$3">
                <InputIcon as={Clock} />
              </InputSlot>
              <InputField placeholder="Enter Date" inputMode="numeric" />
            </Input>
          </VStack>
        </HStack>

        {/* work description input area */}

        <FormControl my={"$3"}>
          <FormControlLabel>
            <FormControlLabelText>Work Description</FormControlLabelText>
            <Icon as={AlertCircle} size="xs" color="red" ml={"$1"} />
          </FormControlLabel>

          <Textarea>
            <TextareaInput placeholder="Write work description, issue, budget etc." />
          </Textarea>
          <FormControlHelper>
            <FormControlHelperText color="red">
              Do not share your personal or contact info, its against company
              policy
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        {/* Extra info for return and cash on delivery */}

        <HStack alignItems="center" mt={"$4"}>
          <Icon as={CheckCircle2} size="sm" color="green" />
          <Text mx={"$2"}>Cash on Service Complete available</Text>
        </HStack>
        <HStack alignItems="center" mt={"$1"}>
          <Icon as={CheckCircle2} size="sm" color="green" />
          <Text mx={"$2"}>7 Days easy complain resolution</Text>
        </HStack>
      </ScrollView>

      <Button mt={"$3"} mx={"$24"} borderRadius={50}>
        <ButtonText>Order Service</ButtonText>
      </Button>
    </View>
  );
}

export default ServiceDetail;
