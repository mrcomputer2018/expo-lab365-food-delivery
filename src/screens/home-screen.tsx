import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { useAuth } from "../hook/use-auth";
import { homeStyles } from "../styles/home-styles";

export default function HomeScreen() {
    const {  user } = useAuth();

    return (
        <SafeAreaView style={homeStyles.container}>
            <StatusBar style="auto" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
                style={homeStyles.scroll}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 20,
                    paddingBottom: 20,
                }}
                nestedScrollEnabled={true}
            >
                <View style={homeStyles.containerRow}>
                    <Text>Seja bem-vindo(a),</Text>
                    <Text>{user?.name ? user.name : "Visitante"}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
