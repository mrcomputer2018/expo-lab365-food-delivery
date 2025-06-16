import { View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function TitleForm() {
    return (
        <View style={{ marginTop: 50 }}>
            <Text style={globalStyles.title}>Faça o seu login aqui!</Text>

            <Text style={globalStyles.description}>
                Seja bem-vindo de volta.
            </Text>
        </View>
    );
}
