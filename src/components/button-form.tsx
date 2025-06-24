import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonFormProps } from "../types/button-types";

export default function ButtonForm({
    textButton,
    action,
    withButton,
}: ButtonFormProps) {
    return (
        <TouchableOpacity
            style={[globalStyles.button, { width: withButton }]}
            onPress={action}
        >
            <LinearGradient
                colors={["#00c66f", "#0077e4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={globalStyles.buttonGradient}
            >
                <Text style={globalStyles.textButton}>{textButton}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
