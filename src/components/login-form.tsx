import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function LoginForm() {
    
    return (
        <View>
            <View style={{ marginBottom: 16 }}>
                <Text style={globalStyles.label}>Email</Text>
                <TextInput
                    placeholder="Digite seu email..."
                    placeholderTextColor="#999"
                    style={globalStyles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View>
                <Text style={globalStyles.label}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    placeholderTextColor="#999"
                    style={globalStyles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
        </View>
    );
}
