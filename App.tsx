import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { ScrollView, Settings } from "react-native";
import Gradient from "./assets/Icons/Gradient";
import DocumentData from "./assets/Icons/DocumentData";
import LightBulbPerson from "./assets/Icons/LightbulbPerson";
import Rocket from "./assets/Icons/Rocket";
import Logo from "./assets/Icons/Logo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Auth/Login";
import SignUp from "./screens/Auth/SignUp";
import Dashboard from "./screens/tabs/Dashboard";
import { useState, createContext, useEffect } from "react";
import { AuthContext } from "./screens/contexts/AuthContext";
import BottomTabNavigator from "./screens/BottomTabNavigator";
import CategoryItemViewer from "./screens/CategoryItemViewer";
import { StatusBar } from "react-native"; // Import StatusBar
import ServiceDetail from "./screens/ServiceDetail";
import { initDatabase } from "./screens/database/Database";
import ServiceTypeScreen from "./screens/ServiceTypesScreen";
import SpecificServiceOption from "./screens/SpecificServiceOption";
import AppTypeSelection from "./screens/AppTypeSelection";
import Seller from "./screens/Seller";
import DiscoverScreen from "./screens/DiscoverScreen";
import Setting from "./screens/Setting";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize the database schema and tables
    initDatabase();
  }, []); // The empty dependency array ensures that this effect runs once on mount

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="AppTypeSelection"
            // screenOptions={{ headerShown: false }}
          >
            {user ? (
              <Stack.Group>
                <Stack.Screen
                  name="Home"
                  component={BottomTabNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CategoryItemViewer"
                  component={CategoryItemViewer}
                  options={{
                    headerStyle: {},
                    // headerTintColor: "white",
                    headerTitleStyle: {
                      fontWeight: "bold",
                      // color: "white",
                    },
                    headerTitleAlign: "center",
                  }}
                />
                <Stack.Screen name="Service Detail" component={ServiceDetail} />
                <Stack.Screen
                  name="ServiceTypesScreen"
                  component={ServiceTypeScreen}
                />
                <Stack.Screen
                  name="SpecificServiceOption"
                  component={SpecificServiceOption}
                />
                <Stack.Screen name="Settings" component={Setting} />
              </Stack.Group>
            ) : (
              <Stack.Group>
                <Stack.Screen
                  name="AppTypeSelection"
                  component={AppTypeSelection}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Seller"
                  component={Seller}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Signup"
                  component={SignUp}
                  options={{ title: "Create Account" }}
                />
                <Stack.Screen
                  name="DiscoverScreen"
                  component={DiscoverScreen}
                  options={{ headerTitle: "Services Preview" }}
                />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </AuthContext.Provider>
  );
}
