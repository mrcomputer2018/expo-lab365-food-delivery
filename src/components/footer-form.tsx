import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { footerFormStyles } from "../styles/footerFormStyles";
import { FooterFormProps } from "../types/footer-form";

export default function FooterForm({
    action,
    margintop,
    title,
    subtitle,
}: FooterFormProps) {
    return (
        <View style={[globalStyles.areaButtonSignup, { marginTop: margintop }]}>
            <Text style={globalStyles.textSignup}>{title}</Text>
            <TouchableOpacity onPress={action}>
                <Text
                    style={ footerFormStyles.textButton }
                >
                    {subtitle}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
