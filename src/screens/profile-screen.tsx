import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, Image } from "react-native";
import { profileStyles } from "../styles/profile-styles";
import { globalStyles } from "../styles/globalStyles";
import { useAuth } from "../hook/use-auth";
import ButtonForm from "../components/button-form";

export default function ProfileScreen() {
    const { user, signOut } = useAuth();

    return (
        <SafeAreaView style={globalStyles.container}>
            <StatusBar style="auto" />
            <View>
                <Image
                    source={require("../../assets/monica_santos.jpg")}
                    style={profileStyles.imageProfile}
                />
            </View>
            <View>
                <Text style={[globalStyles.title, { color: "#333" }]}>
                    {user?.name ? user.name : "Usuário Desconhecido"}
                </Text>
            </View>
            <View>
                <Text style={profileStyles.text}>
                    {user?.email ? user.email : "Email desconhecido"}
                </Text>
            </View>

            <ButtonForm textButton="Sair" action={signOut} withButton={200}/>
        </SafeAreaView>
    );
}
