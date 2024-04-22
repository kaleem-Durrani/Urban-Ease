import {
  Button,
  ButtonText,
  Text,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  MailIcon,
  LockIcon,
  HStack,
  Icon,
  EyeIcon,
  EyeOffIcon,
  AtSignIcon,
  PhoneIcon,
} from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Dimensions, Alert } from "react-native";
import { useState, useEffect } from "react";
import { CircleUserRound } from "lucide-react-native";
import { db } from "../database/Database";

function SignUp({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Fetch user data from the database
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT id, name, email, password FROM users;",
        [],
        (_, results) => {
          const data = [];
          for (let i = 0; i < results.rows.length; i++) {
            data.push(results.rows.item(i));
          }
          setUsersData(data);
        }
      );
    });
  }, []);

  const handleTogglePasswordVisibility = () => {
    setHidePassword((prevHidePassword) => !prevHidePassword);
  };

  const handleNavigate = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    // Input validation
    if (name.length < 3) {
      Alert.alert("Invalid Name", "Name must be at least 3 characters.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE email = ? ",
        [email],
        (tx, results) => {
          if (results.rows.length > 0) {
            Alert.alert(
              "Account already exists",
              "The email you are trying to register already has an account"
            );
            return;
          }
        }
      );
    });

    if (password.length < 8) {
      Alert.alert(
        "Weak Password",
        "Password length must be at least 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }

    // All validations passed, insert user into the database
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?);",
        [name, email, phoneNo, password],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert("Success", "Account created successfully!");
            // Navigate to the login screen or perform any other actions
            handleNavigate();
          } else {
            Alert.alert("Error", "Failed to create account. Please try again.");
          }
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      {/* input for full name */}
      <ScrollView>
        <Input m="$4" variant="underlined">
          <InputSlot pl="$3">
            <InputIcon as={CircleUserRound} size="lg" />
          </InputSlot>
          <InputField
            pl={"$3"}
            placeholder=" Full Name"
            value={name}
            onChangeText={(text) => {
              const trimmedText = text.trim(); // Trim leading and trailing white spaces
              setName(trimmedText);
            }}
          />
        </Input>

        {/* input for email address */}

        <Input m="$4" variant="underlined">
          <InputSlot pl="$3">
            <InputIcon as={MailIcon} size="lg" />
          </InputSlot>
          <InputField
            pl={"$3"}
            placeholder=" E-Mail"
            value={email}
            onChangeText={(text) => {
              const trimmedEmail = text.trim();
              setEmail(trimmedEmail);
            }}
          />
        </Input>

        {/* input field for phone number */}

        <Input m="$4" variant="underlined">
          <InputSlot pl="$3">
            <InputIcon as={PhoneIcon} size="lg" />
          </InputSlot>
          <InputField
            pl={"$3"}
            placeholder=" Phone Number"
            inputMode="numeric"
            value={phoneNo}
            onChangeText={(text) => {
              const trimmedPhoneNo = text.trim();
              setPhoneNo(trimmedPhoneNo);
            }}
          />
        </Input>

        {/* input field for password */}

        <Input m="$4" variant="underlined">
          <InputSlot pl="$3">
            <InputIcon as={LockIcon} size="lg" />
          </InputSlot>
          <InputField
            pl={"$3"}
            placeholder=" Password"
            type={hidePassword ? "password" : "text"}
            value={password}
            onChangeText={(text) => {
              const trimmedPassword = text.trim();
              setPassword(trimmedPassword);
            }}
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

        <Input m="$4" variant="underlined">
          <InputSlot pl="$3">
            <InputIcon as={LockIcon} size="lg" />
          </InputSlot>
          <InputField
            pl={"$3"}
            placeholder=" Confirm Password"
            type={hidePassword ? "password" : "text"}
            value={confirmPassword}
            onChangeText={(text) => {
              const trimmedConfirmPassword = text.trim();
              setConfirmPassword(trimmedConfirmPassword);
            }}
          />

          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            {hidePassword ? (
              <Icon as={EyeOffIcon} m="$3" w="$4" h="$4" />
            ) : (
              <Icon as={EyeIcon} m="$3" w="$4" h="$4" />
            )}
          </TouchableOpacity>
        </Input>

        <Button m="$4" onPress={handleSignUp}>
          <ButtonText>Create Account</ButtonText>
        </Button>

        {/* Display user information and items */}
        <ScrollView horizontal>
          {usersData.map((userData) => (
            <View key={userData.id} style={styles.userDataContainer}>
              <Text>{`ID: ${userData.id}`}</Text>
              <Text>{`Name: ${userData.name}`}</Text>
              <Text>{`Email: ${userData.email}`}</Text>
              <Text>{`Password: ${userData.password}`}</Text>
              {/* Fetch and display user's items here */}
              {/* For example, you can fetch items and display them in a similar way */}
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "lightgray",
    flex: 1,
    flexDirection: "column",
    // marginTop: "10%",
    padding: "2%",
  },

  buttonStyle: {
    borderRadius: 50,
  },
});
