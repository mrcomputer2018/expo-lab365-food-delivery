import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login-screen";
import HomeScreen from "../screens/home-screen";
import SignupScreen from "../screens/signup-screen";

export default function PublicStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                    headerShown:  false,
                }}
            />
        </Stack.Navigator>
    );
}
