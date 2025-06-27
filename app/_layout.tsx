import { Stack } from "expo-router";
import StackNavigator from "@/navigation/Stacknavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
