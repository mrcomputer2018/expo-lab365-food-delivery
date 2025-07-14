import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { loginStyles as styles } from "../styles/login-styles";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import ImageForm from "../components/image-form";
import TitleForm from "../components/title-form";
import { StatusBar } from "expo-status-bar";
import FooterForm from "../components/footer-form";
import ButtonForm from "../components/button-form";
import Checkbox from "expo-checkbox";
import LoginForm from "../components/login-form";

export default function LoginScreen({ navigation }: any) {
    const [isChecked, setChecked] = useState<boolean>(false);

    function handleNavigateToSignup() {
        navigation.navigate("Signup");
    }

    return (
        <KeyboardAvoidingView
            style={[globalStyles.container, { justifyContent: "flex-start" }]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={0}
        >
            <StatusBar style="light" />

            <ImageForm />

            <View style={globalStyles.FormGroup}>
                <TitleForm
                    title="Faça o seu login aqui!"
                    subtitle="Seja bem-vindo de volta."
                />

                <View>
                    <LoginForm />

                    <View style={styles.areaForgotPassword}>
                        <View style={styles.section}>
                            <Checkbox
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? "#66BE70" : undefined}
                            />
                            <Text
                                style={[
                                    styles.paragraph,
                                    { marginLeft: 3, color: "#333" },
                                ]}
                            >
                                Lembrar de mim
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={globalStyles.buttonForgetPassword}
                        >
                            <Text style={styles.paragraph}>
                                esqueceu a senha?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ButtonForm textButton="Login" />

                    <View>
                        <Text style={globalStyles.separator}></Text>
                    </View>

                    <View style={globalStyles.textLoginSoial}>
                        <Text>ou login com</Text>
                    </View>

                    <View style={globalStyles.socialLogin}>
                        <TouchableOpacity style={globalStyles.buttonSocial}>
                            <Text>
                                <AntDesign
                                    name="google"
                                    size={22}
                                    color="black"
                                />
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={globalStyles.buttonSocial}>
                            <Text>
                                <Feather
                                    name="github"
                                    size={22}
                                    color="black"
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <FooterForm
                        action={handleNavigateToSignup}
                        margintop={40}
                        title="Não tem uma conta?"
                        subtitle="Crie sua conta."
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
