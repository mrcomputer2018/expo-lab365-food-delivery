import { View, Text, TextInput } from "react-native";
import ButtonForm from "./button-form";
import { globalStyles } from "../styles/globalStyles";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputIcon from "./input-icon";
import { useState } from "react";

const registerFormSchema = z
    .object({
        nome: z
            .string()
            .nonempty("Nome é obrigatório")
            .min(3, "Nome deve ter pelo menos 3 caracteres")
            .regex(/^[a-zA-Z\s]+$/, "Nome deve conter apenas letras e espaços"),
        email: z.string().nonempty("E-mail é obrigatório").email("E-mail inválido"),
        senha: z
            .string()
            .min(8, "Senha deve ter pelo menos 8 caracteres")
            .max(20, "Senha deve ter no máximo 20 caracteres")
            .nonempty("Senha é obrigatória"),
        confirmarSenha: z.string().nonempty("Confirmação de senha é obrigatória"),
    })
    .refine((data) => data.senha === data.confirmarSenha, {
        message: "As senhas não coincidem",
        path: ["confirmarSenha"],
    });

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
        },
    });

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function handleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    function onSubmit(data: z.infer<typeof registerFormSchema>) {
        console.log(data);
        reset();
    }

    return (
        <View>
            <View style={{ marginBottom: 8 }}>
                <Text style={globalStyles.label}>Nome</Text>
                <Controller
                    control={control}
                    name="nome"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#999"
                            style={[
                                globalStyles.input,
                                { paddingLeft: 50, paddingRight: 10 },
                            ]}
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                />
                <InputIcon iconName="user" />

                {errors.nome && (
                    <Text style={globalStyles.errorText}>
                        {errors.nome.message}
                    </Text>
                )}
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={globalStyles.label}>E-mail</Text>
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
                            keyboardType="default"
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

            <View style={{ marginBottom: 8 }}>
                <Text style={globalStyles.label}>senha</Text>
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

            <View style={{ marginBottom: 8 }}>
                <Text style={globalStyles.label}>Confirmar senha</Text>
                <Controller
                    control={control}
                    name="confirmarSenha"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Confirme sua senha..."
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
                    iconName={showConfirmPassword ? "eye-off" : "eye"}
                    action={handleShowConfirmPassword}
                />

                {errors.confirmarSenha && (
                    <Text style={globalStyles.errorText}>
                        {errors.confirmarSenha.message}
                    </Text>
                )}
            </View>

            <ButtonForm
                textButton="Cadastrar"
                action={handleSubmit(onSubmit)}
            />
        </View>
    );
}
