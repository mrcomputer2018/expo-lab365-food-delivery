import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ImageForm from "../components/image-form";
import { useState } from "react";
import TitleForm from "../components/title-form";

export default function SignupScreen({ navigation }: any) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    function handleNavigationToLogin() {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView
            style={[globalStyles.container, { justifyContent: "flex-start" }]}
        >
            <ImageForm />

            <View style={[globalStyles.FormGroup, { marginTop: -10 }]}>
                <TitleForm
                    title="Cadastre-se aqui!"
                    subtitle="Crie a sua conta agora."
                />

                <View>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={globalStyles.label}>Nome</Text>
                        <TextInput
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#999"
                            style={globalStyles.input}
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={{ marginBottom: 16 }}>
                        <Text style={globalStyles.label}>E-mail</Text>
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

                    <View style={{ marginBottom: 16 }}>
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

                    <View style={{ marginBottom: 16 }}>
                        <Text style={globalStyles.label}>Confirme Senha</Text>
                        <TextInput
                            placeholder="Confirme sua senha..."
                            placeholderTextColor="#999"
                            style={globalStyles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>

                    <TouchableOpacity style={globalStyles.button}>
                        <Text
                            style={[globalStyles.textButton, { color: "#fff" }]}
                        >
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={[globalStyles.areaButtonSignup, { marginTop: 20 }]}>
                    <Text style={globalStyles.textSignup}>
                        Já tem uma conta?
                    </Text>
                    <TouchableOpacity onPress={handleNavigationToLogin}>
                        <Text
                            style={{
                                color: "#66BE70",
                                fontSize: 16,
                                marginLeft: 10,
                                fontWeight: "bold",
                            }}
                        >
                            Faça login.
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
