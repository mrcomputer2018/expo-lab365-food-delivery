import { View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface TitleFormProps {
    title: string;
    subtitle: string;
}

export default function TitleForm({ title, subtitle} : TitleFormProps) {
    return (
        <View style={{ marginTop: 50 }}>
            <Text style={globalStyles.title}>{title}</Text>

            <Text style={globalStyles.description}>
                {subtitle}
            </Text>
        </View>
    );
}
