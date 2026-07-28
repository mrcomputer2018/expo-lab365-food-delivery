import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login-screen";
import SignupScreen from "../screens/signup-screen";
import EntryScreen from "../screens/entry-screen";

export default function PublicStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Entry">
            <Stack.Screen
                name="Entry"
                component={EntryScreen}
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
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
