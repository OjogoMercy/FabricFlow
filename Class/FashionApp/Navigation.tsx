import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from './Screens/Homescreen'

const FashionNavigator = createNativeStackNavigator()
export default function FashionNav() {
    return (
        <NavigationContainer >
            <FashionNavigator.Navigator>
                <FashionNavigator.Screen name="Homescreen" component={Homescreen}/>
           </FashionNavigator.Navigator>
        </NavigationContainer>
    )
}   