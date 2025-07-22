import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { AuthProvider } from "./src/contexts/auth-context";
import Toast from "react-native-toast-message";

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <RootStack />
                <Toast />
            </NavigationContainer>
        </AuthProvider>
    );
}
