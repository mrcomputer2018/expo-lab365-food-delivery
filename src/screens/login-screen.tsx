import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import ImageForm from "../components/image-form";
import TitleForm from "../components/title-form";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleNavigateToSignup() {
        navigation.navigate("Signup");
    }

    return (
        <SafeAreaView
            style={[globalStyles.container, { justifyContent: "flex-start" }]}
        >
            <StatusBar style="light" />
            
            <ImageForm />

            <View style={globalStyles.FormGroup}>
                <TitleForm
                    title="Faça o seu login aqui!"
                    subtitle="Seja bem-vindo de volta."
                />
                
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

                    <View style={globalStyles.areaButtonSignup}>
                        <Text style={globalStyles.textSignup}>
                            Não tem uma conta?
                        </Text>
                        <TouchableOpacity onPress={handleNavigateToSignup}>
                            <Text
                                style={{
                                    color: "#66BE70",
                                    fontSize: 16,
                                    marginLeft: 10,
                                    fontWeight: "bold",
                                }}
                            >
                                Crie sua conta.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
