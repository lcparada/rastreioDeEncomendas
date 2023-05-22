import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Welcome from "../screens/welcome";
import Register from "../screens/register";
import Login from "../screens/login";

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
