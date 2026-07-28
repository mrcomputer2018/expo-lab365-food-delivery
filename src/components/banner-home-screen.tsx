import { View, Image } from "react-native";
import { assets } from "../../assets/assets";
import { bannerHomeScreenStyles as styles } from "../styles/banner-home-screen-styles";

export default function BannerHomeScreen() {
    return (
        <View style={styles.imageArea}>
            <Image source={assets.banner2} style={styles.image} />
        </View>
    );
}
