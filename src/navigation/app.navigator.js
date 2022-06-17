import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "../screens/onboard";
import Login from "../screens/authentication/Login";
import Register from "../screens/authentication/Register";
import Verification from "../screens/authentication/Verify";
import TabNavigator from "./main.navigator";

const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <stack.Navigator initialRouteName="Main">
      <stack.Screen
        name="on_board"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <stack.Screen name="Verification" component={Verification} />
      <stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

export default AppNavigator;
