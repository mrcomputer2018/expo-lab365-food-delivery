import { TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons as Material } from "@expo/vector-icons";
import { scrollTitleStyles as styles } from "../../styles/scroll-title-styles";

interface ScrollTitleButtonProps {
    onPress?: () => void
}

export default function ScrollTitleButton({onPress}: ScrollTitleButtonProps ) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>Ver todas</Text>
            <Material name="chevron-right" size={24} color="#00c66f" />
        </TouchableOpacity>
    );
}
