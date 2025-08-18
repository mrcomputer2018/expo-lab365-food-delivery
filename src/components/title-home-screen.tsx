import { View, Text } from "react-native";
import { useAuth } from "../hook/use-auth";
import { titleHomeScreenStyles as styles } from "../styles/title-home-screen-styles";

export default function TitleHomeScreen() {
    const { user } = useAuth();

    return (
        <View style={styles.containerRow}>
            <Text>Seja bem-vindo(a),</Text>
            <Text>{user?.name ? user.name : "Visitante"}</Text>
        </View>
    );
}
