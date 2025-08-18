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
import TitleHomeScreen from "../components/title-home-screen";
import SearchInput from "../components/search-input";
import ScrollTitle from "../components/scroll-title";

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
                <TitleHomeScreen />

                <SearchInput />

                <ScrollTitle />
               
            </ScrollView>
        </SafeAreaView>
    );
}
