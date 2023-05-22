import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Home from "../screens/home";
import AddOrder from "../screens/addOrder";
import ProfileRoutes from "./profile.routes";

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarActiveTintColor: "#F8AE39",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="AddOrder"
        component={AddOrder}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="cube" size={size} color={color} />;
            } else {
              return <Ionicons name="cube-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="ProfileRoutes"
        component={ProfileRoutes}
        options={{
          headerTransparent: true,
          headerTitle: "",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            } else {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
