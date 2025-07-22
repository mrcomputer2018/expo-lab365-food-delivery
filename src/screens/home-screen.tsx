import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../hook/use-auth";

export default function HomeScreen() {
    const { signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar style="auto" />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Pagina Home</Text>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={handleSignOut}>
                <Text style={{ fontSize: 18, color: "blue" }}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
