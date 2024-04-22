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
  Center,
  Divider,
} from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Dimensions, Alert, ScrollView } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { db, deleteUserById } from "../database/Database";
import { useFocusEffect } from "@react-navigation/native";
import { CheckCircle2 } from "lucide-react-native";

function Login({ navigation }: any) {
  const { width, height } = Dimensions.get("window");
  const { user, setUser } = useContext(AuthContext);
  const [checkSelected, setCheckSelected] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usersData, setUsersData] = useState([]);
  const [id, setId] = useState("");

  const handleUserDelete = () => {
    if (id) {
      deleteUserById(Number(id));
    } else {
      Alert.alert("ID Empty", "Enter a valid id");
    }
    setId("");
  };

  useFocusEffect(
    React.useCallback(() => {
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
    }, [handleUserDelete])
  );

  const handleSignIn = () => {
    // Validate email format

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (password.length <= 7) {
      Alert.alert("Weak Password", "Password legnth must be longer than 6 ");
      return;
    }

    // Check if the entered email and password exist in the database
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM users WHERE email = ? AND password = ?;",
          [email, password],
          (tx, results) => {
            if (results.rows.length > 0) {
              // console.log(results.rows.item(0));
              const userFromDatabase = results.rows.item(0);

              // Destructure the user object, excluding the password
              const { password, ...userWithoutPassword } = userFromDatabase;

              // Set the user state with the obtained user information
              setUser(userWithoutPassword);
              // setIsLoggedIn(true);
            } else {
              Alert.alert(
                "Invalid Credentials",
                "Email or password is incorrect."
              );
            }
          }
        );
      });
    } catch (error) {
      console.error("Transaction error: ", error);
    }

    // for quick login
    // setIsLoggedIn(true);
  };

  const handleTogglePasswordVisibility = () => {
    setHidePassword((prevHidePassword) => !prevHidePassword);
  };

  const handleNavigate = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Text alignSelf="center" color="darkblue" size="xl" my={"$4"}>
        Urban Ease
      </Text>
      <ScrollView>
        <Input m="$3" variant="outline" borderColor="blue">
          <InputSlot pl="$3">
            <InputIcon as={MailIcon} />
          </InputSlot>
          <InputField
            pl={"$2"}
            placeholder=" E-Mail"
            onChangeText={(text) => setEmail(text)}
          />
        </Input>

        <Input m="$3" variant="outline" borderColor="blue">
          <InputSlot pl="$3">
            <InputIcon as={LockIcon} />
          </InputSlot>
          <InputField
            pl={"$2"}
            placeholder=" Password"
            type={hidePassword ? "password" : "text"}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            {hidePassword ? (
              <Icon as={EyeOffIcon} m="$3" w="$4" h="$4" />
            ) : (
              <Icon as={EyeIcon} m="$3" w="$4" h="$4" />
            )}
          </TouchableOpacity>
        </Input>

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

        {/* forgot password */}
        <TouchableOpacity>
          <Text color="blue" mx={"$3"} my={"$3"}>
            Forgot Password? Click here
          </Text>
        </TouchableOpacity>

        {/* sign in button */}

        <Button m="$3" onPress={handleSignIn} style={styles.buttonStyle}>
          <ButtonText>Sign in</ButtonText>
        </Button>

        {/* create account button */}
        <Button
          m="$3"
          onPress={handleNavigate}
          style={[styles.buttonStyle, { backgroundColor: "rgba(0,0,0,1)" }]}
        >
          <ButtonText>Create Account</ButtonText>
        </Button>

        {/* browse services */}

        <Center flexDirection="row" my={"$3"}>
          <Divider my="$0.5" flex={1} />
          <Text>OR</Text>
          <Divider my="$0.5" flex={1} />
          {/* <Text flex={1}>Difficult</Text> */}
        </Center>

        <Button
          my={"$3"}
          mx={"$3"}
          borderRadius={50}
          onPress={() => navigation.navigate("DiscoverScreen")}
        >
          <ButtonText>Browse Services</ButtonText>
        </Button>

        {/* login using social account */}

        <Center flexDirection="row" my={"$0"} mt={"$10"}>
          <Divider my="$0.5" flex={1} />
          <Text>Login using social account</Text>
          <Divider my="$0.5" flex={1} />
          {/* <Text flex={1}>Difficult</Text> */}
        </Center>

        {/* login with google button */}

        <Button my={"$6"}>
          <ButtonText>Continue with google</ButtonText>
        </Button>

        {/* login with facebook */}

        <Button>
          <ButtonText>Continue with facebook</ButtonText>
        </Button>

        {/* Display user information and items */}
        {/* <ScrollView horizontal>
          {usersData.map((userData) => (
            <View key={userData.id} style={styles.userDataContainer}>
              <Text>{`ID: ${userData.id}`}</Text>
              <Text>{`Name: ${userData.name}`}</Text>
              <Text>{`Email: ${userData.email}`}</Text>
              <Text>{`Password: ${userData.password}`}</Text>
            </View>
          ))}
        </ScrollView> */}
        <View style={{ marginTop: "15%" }}></View>
      </ScrollView>

      {/* <Input m="$3" variant="underlined">
        <InputSlot pl="$3"></InputSlot>
        <InputField
          value={id}
          placeholder=" User id"
          onChangeText={(text) => setId(text)}
          inputMode="numeric"
        />
      </Input>
      <Button onPress={handleUserDelete}>
        <ButtonText>delete user by id</ButtonText>
      </Button> */}
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "lightgray",
    flex: 1,
    flexDirection: "column",
    marginTop: "10%",
    padding: "2%",
    // paddingBottom: "40%",
  },

  buttonStyle: {
    borderRadius: 50,
  },
});
