import { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ImageForm from "../components/image-form";
import TitleForm from "../components/title-form";
import FooterForm from "../components/footer-form";
import ButtonForm from "../components/button-form";
import RegisterForm from "../components/register-form";

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

            <View
                style={[
                    globalStyles.FormGroup,
                    { marginTop: -24 },
                ]}
            >
                <TitleForm
                    title="Cadastre-se aqui!"
                    subtitle="Crie sua conta para começar."
                />

                <View>
                    <RegisterForm />
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
