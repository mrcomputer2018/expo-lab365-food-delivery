import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }: any) {
    function handleNavigationToLogin() {
        navigation.navigate("Login");
    }

    return (
        <ImageBackground
            source={require("../../assets/background.jpeg")}
            style={styles.container}
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

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleNavigationToLogin}
                >
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    areaText: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 10,
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 26,
        color: "#fff",
        textAlign: "center",
        marginBottom: 30,
    },
    description: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        marginBottom: 30,
    },
    button: {
        width: 280,
        height: 50,
        backgroundColor: "#66BE70",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
