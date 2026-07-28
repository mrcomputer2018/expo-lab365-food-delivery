import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/globalStyles";

interface CustomButtonProps {
    title: string;
    action: () => void;
    width?: number;
}

export default function CustomButton({
    title,
    action,
    width,
}: CustomButtonProps) {
    return (
        <TouchableOpacity
            style={[globalStyles.button, { width: width }]}
            onPress={action}
        >
            <LinearGradient
                colors={["#00c66f", "#0077e4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={globalStyles.buttonGradient}
            >
                <Text style={ globalStyles.textButton}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
