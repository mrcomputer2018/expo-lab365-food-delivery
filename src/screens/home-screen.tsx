import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    ScrollView,
} from "react-native";
import { homeStyles } from "../styles/home-styles";
import TitleHomeScreen from "../components/title-home-screen";
import SearchInput from "../components/search-input";
import BannerHomeScreen from "../components/banner-home-screen";
import ScrollTitleTtitle from "../components/scrolltitle/scroll-tittle-title";
import ScrollTitleButton from "../components/scrolltitle/scroll-title-button";
import { ScrollTitle } from "../components/scrolltitle/index";

export default function HomeScreen() {

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

                <BannerHomeScreen />

                <SearchInput />

                <ScrollTitle.Root>
                    <ScrollTitle.Title text="Categorias" />
                    <ScrollTitle.Button onPress={() =>console.log("Clicado!!!")}/>
                </ScrollTitle.Root>
            </ScrollView>
        </SafeAreaView>
    );
}
