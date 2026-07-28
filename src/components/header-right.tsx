import { View, Text } from "react-native"
import Material from "@expo/vector-icons/MaterialCommunityIcons"

export default function HeaderRight() {
    return (
        <View style={{ marginRight: 16,  backgroundColor: "#66BE70", borderRadius: 50, padding: 8 }}>
            <Material name="shopping-outline" color="#fff" size={24} />
        </View>
    )
}