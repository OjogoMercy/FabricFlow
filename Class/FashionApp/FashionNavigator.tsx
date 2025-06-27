import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from './Screens/Homescreen'
import Carts from "./Screens/Carts";
import Details from "./Screens/Details";
import Favourites from "./Screens/Favourites";
import IntroScreen from "./Screens/IntroScreen";
import Profile from "./Screens/Profile";
import Signin from "./Screens/Sign-In";
import Signup from "./Screens/Sign-Up";
import Bottomtab from './Screens/Bottomtab'
import Splash from "./Screens/Splash";
import Succesful from "./Screens/Succesful";
import Verification from "./Screens/Verification";
import Forgot from "./Forgot";

const FashionNavigator = createNativeStackNavigator()
export default function FashionNav() {
    return (
            <FashionNavigator.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
                <FashionNavigator.Screen name="Homescreen" component={Homescreen} />
                <FashionNavigator.Screen name="Carts" component={Carts} />
                <FashionNavigator.Screen name="Details" component={Details} />
                <FashionNavigator.Screen name="Favourites" component={Favourites} />
                <FashionNavigator.Screen name="Profile" component={Profile} />
                <FashionNavigator.Screen name="IntroScreen" component={IntroScreen} />
                <FashionNavigator.Screen name="Signin" component={Signin} />
                <FashionNavigator.Screen name="Signup" component={Signup} />
                <FashionNavigator.Screen name="Bottomtab" component={Bottomtab} />
                <FashionNavigator.Screen name="Splash" component={Splash} />
                <FashionNavigator.Screen name="Verification" component={Verification} />
                <FashionNavigator.Screen name="Succesful" component={Succesful} />
                <FashionNavigator.Screen name="Forgot" component={Forgot} />
           </FashionNavigator.Navigator>
    )
}   