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
  MailIcon,
} from "@gluestack-ui/themed";
import {
  CheckCircle,
  CheckCircle2,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  Phone,
  User,
} from "lucide-react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

function Seller() {
  const [hidePassword, setHidePassword] = useState(true);

  const [checkSelected, setCheckSelected] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setHidePassword((prevHidePassword) => !prevHidePassword);
  };
  return (
    <View m={"$5"}>
      <Text alignSelf="center">Welcome to Urban Ease </Text>
      <Text alignSelf="center" bold={true} mt={"$3"}>
        Sign up as a Professional
      </Text>
      <ScrollView>
        <Input m="$3" variant="outline" borderColor="darkblue">
          <InputSlot pl="$3">
            <InputIcon as={User} />
          </InputSlot>
          <InputField
            placeholder="Full Name"
            //   onChangeText={(text) => setEmail(text)}
          />
        </Input>

        <Input m="$3" variant="outline" borderColor="darkblue">
          <InputSlot pl="$3">
            <InputIcon as={Phone} />
          </InputSlot>
          <InputField placeholder="Mobile Number" inputMode="numeric" />
        </Input>

        {/* input field for password */}

        <Input m="$3" variant="outline" borderColor="darkblue">
          <InputSlot pl="$3">
            <InputIcon as={LockIcon} size="lg" />
          </InputSlot>
          <InputField
            pl={"$3"}
            placeholder=" Password"
            type={hidePassword ? "password" : "text"}
            // value={password}
            // onChangeText={(text) => {
            //   const trimmedPassword = text.trim();
            //   setPassword(trimmedPassword);
            // }}
          />
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            {hidePassword ? (
              <Icon as={EyeOffIcon} m="$3" w="$4" h="$4" />
            ) : (
              <Icon as={EyeIcon} m="$3" w="$4" h="$4" />
            )}
          </TouchableOpacity>
        </Input>

        {/* input field for confirm password */}

        <Input m="$3" variant="outline" borderColor="darkblue">
          <InputSlot pl="$3">
            <InputIcon as={LockIcon} size="lg" />
          </InputSlot>
          <InputField
            pl={"$3"}
            placeholder=" Confirm Password"
            type={hidePassword ? "password" : "text"}
            // value={confirmPassword}
            // onChangeText={(text) => {
            //   const trimmedConfirmPassword = text.trim();
            //   setConfirmPassword(trimmedConfirmPassword);
            // }}
          />

          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            {hidePassword ? (
              <Icon as={EyeOffIcon} m="$3" w="$4" h="$4" />
            ) : (
              <Icon as={EyeIcon} m="$3" w="$4" h="$4" />
            )}
          </TouchableOpacity>
        </Input>

        {/* gender select */}

        <VStack
          my={"$3"}
          mx={"$3"}
          p={"$2"}
          borderWidth={1}
          borderColor="darkblue"
        >
          <Text mx={"$3"} size="sm">
            Select Gender
          </Text>
          <Select mx={"$3"}>
            <SelectTrigger
              variant="underlined"
              size="lg"
              flexDirection="column"
            >
              <HStack>
                <SelectInput placeholder="Gender" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </HStack>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Male" value="ux" />
                <SelectItem label="Female" value="web" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </VStack>

        {/* remever password */}

        <HStack mx={"$3"} mt={"$3"} alignItems="center">
          <TouchableOpacity onPress={() => setCheckSelected(!checkSelected)}>
            <Icon
              as={CheckCircle2}
              size="xl"
              color={checkSelected ? "white" : "white"}
              fill={checkSelected ? "blue" : "white"}
            />
          </TouchableOpacity>
          <Text ml={"$5"} size="xs">
            Remember Password
          </Text>
        </HStack>

        {/* terms and agreements */}
        <HStack mx={"$3"} mt={"$3"} alignItems="center">
          <TouchableOpacity
            onPress={() => setTermsAndConditions(!termsAndConditions)}
          >
            <Icon
              as={CheckCircle2}
              size="xl"
              color={termsAndConditions ? "white" : "white"}
              fill={termsAndConditions ? "blue" : "white"}
            />
          </TouchableOpacity>
          <Text ml={"$5"} size="xs">
            I agree to
          </Text>
          <Text size="xs" color="blue">
            {" "}
            Terms and Conditions
          </Text>
          <Text size="xs"> and accept</Text>
          <Text size="xs" color="blue">
            {" "}
            Privacy Policy
          </Text>
        </HStack>
        <Button borderRadius={20} mx={"$10"} mt={"$5"}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </ScrollView>
    </View>
  );
}

export default Seller;
