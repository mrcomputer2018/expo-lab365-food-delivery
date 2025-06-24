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
import FooterForm from "../components/footer-form";
import ButtonForm from "../components/button-form";

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

                    <ButtonForm textButton="Cadastrar" />

                    <FooterForm
                        action={handleNavigateToLogin}
                        margintop={20}
                        title="Já tem uma conta?"
                        subtitle="Faça login"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
