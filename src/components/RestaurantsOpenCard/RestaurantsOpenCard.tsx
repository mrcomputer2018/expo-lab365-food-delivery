import { View, Text, Image } from "react-native";
import { assets } from "../../../assets/assets";
import { restaurantOpenListStyles as styles } from "../../styles/restaurant-open-list-styles";
import { Feather } from "@expo/vector-icons";

interface RestaurantsOpenCardProps {
    id: string;
    name: string;
    cuisine: string;
    specialties: string;
    rating: string;
    deliveryInfo: string;
    time: string;
    image: assets.roseGarden;
}

export default function RestaurantsOpenCard() {
    return (
        <View style={styles.restaurantCard}>
            <Image
                source={assets.roseGarden}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.infoSection}>
                <View>
                    <Text style={styles.restaurantName}>
                        Rose Garden Restaurant
                    </Text>
                    <Text style={styles.cuisineType}>Cozinha Americana</Text>
                    <Text style={styles.specialties}>
                        Frango - Burgers - Wings
                    </Text>
                </View>

                <View style={styles.deliveryInfoSection}>
                    <View style={styles.container}>
                        <Feather name="star" size={12} color="#66BE70" />
                        <Text style={styles.textInfo}>4.7</Text>
                    </View>
                    <View>
                        <Text style={styles.textInfo}>Entrega grátis</Text>
                    </View>
                    <View style={styles.container}>
                        <Feather name="clock" size={12} color="#66BE70" />
                        <Text style={styles.textInfo}>30 min</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
