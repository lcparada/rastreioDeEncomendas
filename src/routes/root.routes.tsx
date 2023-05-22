import { createStackNavigator } from "@react-navigation/stack";

import { useState, useEffect } from "react";

const Stack = createStackNavigator();

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { FireStoreService } from "../services/firestoreService";

export default function RootRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    new FireStoreService().getAuthenticatedUser(setIsAuthenticated);
  }, [isAuthenticated]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AuthRoutes"
    >
      {isAuthenticated ? (
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      ) : (
        <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
      )}
    </Stack.Navigator>
  );
}
