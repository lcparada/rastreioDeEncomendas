import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Profile from "../screens/profile";
import EditProfile from "../screens/editProfile";
import InformationApp from "../screens/informationApp";

export default function ProfileRoutes() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Meu perfil",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Lexend_400Regular",
          },
          headerTitleContainerStyle: {
            height: 120,
          },
          headerTransparent: true,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InformationApp"
        component={InformationApp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
