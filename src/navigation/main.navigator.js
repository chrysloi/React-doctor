import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as icons from "@expo/vector-icons";
import Home from "../screens/home";
import Consult from "../screens/consult";
import Science from "../screens/science";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return (iconName = focused ? (
              <icons.FontAwesome name="home" size={size} color={color} />
            ) : (
              <icons.FontAwesome name="home" size={size} color={color} />
            ));
          }
          if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          if (route.name === "Consult") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          }
          if (route.name === "Science") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2277fa",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Science"
        component={Science}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
