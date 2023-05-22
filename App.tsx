import {
  useFonts,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./src/routes/app.routes";

import RootRoutes from "./src/routes/root.routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/services/queryClient";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootRoutes />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
