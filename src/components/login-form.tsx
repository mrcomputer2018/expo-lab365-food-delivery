import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { loginStyles as styles } from "../styles/login-styles";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonForm from "./button-form";
import Checkbox from "expo-checkbox";
import { Feather } from "@expo/vector-icons";
import InputIcon from "./input-icon";

const loginFormSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "O campo nome é obrigatorio" })
        .email({
            message: "O campo nome deve ser um email valido",
        }),
    senha: z
        .string()
        .nonempty({ message: " O campo senha é obrogatorio" })
        .min(8, { message: "O campo senha deve ter no minmo de 8 caracteres" })
        .max(20, {
            message: " O campo de senha deve ter no maximo de 20 caracteres",
        }),
});

export default function LoginForm() {
    const [isChecked, setChecked] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function onSubmit(data: z.infer<typeof loginFormSchema>) {
        console.log(data);
        reset();
    }

    return (
        <View>
            <View style={{ marginBottom: 16 }}>
                <Text style={globalStyles.label}>Email</Text>
                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Digite seu email..."
                            placeholderTextColor="#999"
                            style={[
                                globalStyles.input,
                                { paddingLeft: 50, paddingRight: 10 },
                            ]}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <InputIcon iconName="mail" />

                {errors.email && (
                    <Text style={globalStyles.errorText}>
                        {errors.email.message}
                    </Text>
                )}
            </View>

            <View>
                <Text style={globalStyles.label}>Senha</Text>
                <Controller
                    control={control}
                    name="senha"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Digite sua senha..."
                            placeholderTextColor="#999"
                            style={[
                                globalStyles.input,
                                { paddingLeft: 50, paddingRight: 10 },
                            ]}
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={onBlur}
                            secureTextEntry={showPassword}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <InputIcon
                    iconName={showPassword ? "eye-off" : "eye"}
                    action={handleShowPassword}
                />

                {errors.senha && (
                    <Text style={globalStyles.errorText}>
                        {errors.senha.message}
                    </Text>
                )}
            </View>
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
                <TouchableOpacity style={globalStyles.buttonForgetPassword}>
                    <Text style={styles.paragraph}>esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <ButtonForm textButton="Login" action={handleSubmit(onSubmit)} />
        </View>
    );
}
