import { createContext, useState, useEffect } from "react";
import { clearStorage, getData, storeData } from "../service/storage";
import Toast from "react-native-toast-message";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextData {
    user: User | null;
    signIn: (email: string, senha: string) => void;
    signOut: () => void;
    loading: boolean;
}

type User = {
    id: string;
    name: string;
    email: string;
    profile: string;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageData = await getData("@user");

            if (storageData) {
                setUser(storageData);
            }

            setLoading(false);
        }

        loadStorageData();
    }, [user]);

    useEffect(() => {}, [user]);

    function signIn(email: string, senha: string) {
        setLoading(true);

        setTimeout(async () => {
            if (email === "user@user.com" && senha === "12345678") {
                const userData = {
                    id: "1",
                    name: "User",
                    email: "user@user.com",
                    profile: "user",
                };

                setUser(userData);

                await storeData("@user", JSON.stringify(userData));

                setLoading(false);

                Toast.show({
                    type: "success",
                    text1: "Login realizado com sucesso!",
                    text2: "Bem-vindo de volta!",
                    visibilityTime: 5000,
                });
            } else {
                setLoading(false);
                Toast.show({
                    type: "error",
                    text1: "Erro ao realizar login",
                    visibilityTime: 5000,
                });
            }
        }, 2000);
    }

    function signOut() {
        setLoading(true);

        setTimeout(async () => {
            await clearStorage();
            setUser(null);
            setLoading(false);

            Toast.show({
                type: "success",
                text1: "Logout realizado com sucesso!",
                visibilityTime: 5000,
            });
        }, 1000);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
