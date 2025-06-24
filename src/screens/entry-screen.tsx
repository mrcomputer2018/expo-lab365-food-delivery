import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ButtonForm from "../components/button-form";
import { entryStyles as styles } from "../styles/entry-styles";

export default function EntryScreen({ navigation }: any) {
    function handleNavigationToLogin() {
        navigation.navigate("Login");
    }

    return (
        <ImageBackground
            source={require("../../assets/background.jpeg")}
            style={globalStyles.container}
        >
            <StatusBar style="light" />

            <View style={styles.areaText}>
                <Image
                    source={require("../../assets/logotipo.png")}
                    style={styles.logo}
                />

                <Text style={styles.subtitle}>Bem-vindo ao</Text>

                <Text style={styles.title}>NextBite Food</Text>

                <Text style={styles.description}>
                    O futuro da sua próxima refeição
                </Text>

                <ButtonForm
                    textButton="Entrar"
                    action={handleNavigationToLogin}
                    withButton={280}
                />
            </View>
        </ImageBackground>
    );
}
