import { View, Text, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
    nome: z.string().nonempty({ message: "O campo nome é obrigatorio" }),
    senha: z
        .string()
        .nonempty({ message: " O campo senha é obrogatorio" })
        .min(3, { message: "O campo senha deve ter no minmo de 3 caracteres" })
        .max(20, {
            message: " O campo de senha deve ter no maximo de 20 caracteres",
        }),
});

export default function LoginForm() {

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            nome: "",
            senha: ""
        }
    })

    return (
        <View>
            <View style={{ marginBottom: 16 }}>
                <Text style={globalStyles.label}>Email</Text>
                <Controller
                    control={control}
                    name="nome"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Digite seu email..."
                            placeholderTextColor="#999"
                            style={globalStyles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                />
                {errors.nome && (
                    <Text style={styles.errorText}>{errors.nome.message}</Text>
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
                            style={globalStyles.input}
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                        />
                    )}
                />
                {errors.nome && (
                    <Text style={styles.errorText}>{errors.nome.message}</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 14,
        textAlign: "center",
        color: "red",
    },
});


