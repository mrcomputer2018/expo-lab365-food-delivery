import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useState } from "react";

export default function LoginScreen() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <SafeAreaView
            style={[globalStyles.container, { justifyContent: "flex-start" }]}
        >
            <View>
                <Image
                    source={require("../../assets/background.jpeg")}
                    style={globalStyles.imageTop}
                />
            </View>

            <View style={globalStyles.FormGroup}>
                <View style={{ marginTop: 20 }}>
                    <Text style={globalStyles.title}>
                        Faça o seu login aqui!
                    </Text>

                    <Text style={globalStyles.description}>
                        Seja bem-vindo de volta.
                    </Text>
                </View>
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

                    <TouchableOpacity style={globalStyles.buttonForgetPassword}>
                        <Text>esqueceu a senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={globalStyles.button}>
                        <Text
                            style={[globalStyles.textButton, { color: "#fff" }]}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={globalStyles.separator}></Text>
                    </View>

                    <View style={globalStyles.textLoginSoial}>
                        <Text>ou login com</Text>
                    </View>

                    <View></View>
                </View>
            </View>
        </SafeAreaView>
    );
}
