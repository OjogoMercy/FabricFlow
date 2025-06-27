import { Stack } from "expo-router";
import StackNavigator from "@/navigation/Stacknavigator";
import { NavigationContainer,NavigationIndependentTree } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
  <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </NavigationIndependentTree>
  
  );
}
