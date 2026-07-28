import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonFormProps } from "../types/button-types";
import { useAuth } from "../hook/use-auth";

export default function ButtonForm({
    textButton,
    action,
    withButton,
}: ButtonFormProps) {
    
    const { loading } = useAuth();

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
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={globalStyles.textButton}>{textButton}</Text>
                )}
            </LinearGradient>
        </TouchableOpacity>
    );
}
