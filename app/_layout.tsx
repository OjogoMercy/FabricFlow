import StackNavigator from "@/navigation/Stacknavigator";
import React from "react";
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
