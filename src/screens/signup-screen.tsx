import { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ImageForm from "../components/image-form";
import TitleForm from "../components/title-form";

export default function SignupScreen({ navigation }: any) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    function handleNavigateToLogin() {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView
            style={[globalStyles.container, { justifyContent: "flex-start" }]}
        >
            <ImageForm />

            <View style={[globalStyles.FormGroup, { marginTop: -13 }]}>
                <TitleForm
                    title="Cadastre-se aqui!"
                    subtitle="Crie sua conta para começar."
                />

                <View>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={globalStyles.label}>Nome</Text>
                        <TextInput
                            placeholder="Digite seu bome..."
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
                            placeholder="Digite seu e-mail..."
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
                        <Text style={globalStyles.label}>senha</Text>
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
                        <Text style={globalStyles.label}>Confirmar senha</Text>
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

                    <View style={[globalStyles.areaButtonSignup, { marginTop: 20 }]}>
                        <Text style={globalStyles.textSignup}>
                            Já tem uma conta?
                        </Text>
                        <TouchableOpacity onPress={handleNavigateToLogin}>
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
            </View>
        </SafeAreaView>
    );
}
