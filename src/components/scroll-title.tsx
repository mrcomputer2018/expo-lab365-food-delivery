import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons as Material } from "@expo/vector-icons";
import { scrollTitleStyles as styles } from "../styles/scroll-title-styles";

export default function ScrollTitle() {
    return (
        <View style={ styles.container}>
            <Text style={ styles.title }>Promoção do dia</Text>

            <TouchableOpacity style={ styles.button }>
                <Text style={ styles.textButton}>Ver todas</Text>
                <Material name="chevron-right" size={24} color="#00c66f" />
            </TouchableOpacity>
        </View>
    )
}