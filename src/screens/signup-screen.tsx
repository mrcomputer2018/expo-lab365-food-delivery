import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ImageForm from "../components/image-form";

export default function SignupScreen() {
    return (
        <SafeAreaView
            style={[globalStyles.container, { justifyContent: "flex-start" }]}
        >
            <StatusBar style="dark" />

            <ImageForm />

            <View></View>
        </SafeAreaView>
    );
}
