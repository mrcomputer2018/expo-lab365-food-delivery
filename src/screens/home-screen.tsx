import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { homeStyles } from "../styles/home-styles";
import TitleHomeScreen from "../components/title-home-screen";
import SearchInput from "../components/search-input";
import BannerHomeScreen from "../components/banner-home-screen";
import { ScrollTitle } from "../components/scrolltitle/index";
import ScrollCategories from "../components/scroll-categories";
import { assets } from "../../assets/assets";
import RestaurantsOpenList from "../components/restaurants-open-list";

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
                    <ScrollTitle.Button
                        onPress={() => console.log("Clicado!!!")}
                    />
                </ScrollTitle.Root>

                <ScrollCategories />

                <ScrollTitle.Root>
                    <ScrollTitle.Title text="Restaurantes abertos" />
                    <ScrollTitle.Button
                        onPress={() => console.log("Clicado!!!")}
                    />
                </ScrollTitle.Root>

                <RestaurantsOpenList />
                
            </ScrollView>
        </SafeAreaView>
    );
}
