import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../hook/use-auth";
import { headerLeftStyles as styles } from "../styles/header-left-styles";

export default function HeaderLaft() {
    const { user } = useAuth();
    return (
        <View style={styles.container}>
            <View style={styles.buttonArea}>
                <Feather name="menu" size={24} color="#66BE70" />
            </View>
            <View>
                <Text style={styles.text}>Entrega para</Text>
                <Text style={styles.userName}>
                    {user?.name ? user?.name : "Usuario desconhecido"}
                </Text>
            </View>
        </View>
    );
}
