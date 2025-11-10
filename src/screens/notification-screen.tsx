import { ScrollView, Text } from "react-native";
import { assets } from "../../assets/assets";
import RestaurantCard from "../components/compound-patterns-demo";
import { restaurantCardStyles as styles } from "../components/compound-patterns-demo/restaurant-card.styles";

const restaurants = [
    {
        id: "1",
        name: "Bella Italia",
        cuisine: "Italiana",
        specialties: "Pizza - Massas - Risotos",
        rating: "4.8",
        deliveryInfo: "Grátis",
        time: "25-35 min",
        image: assets.bellaItalia,
    },
    {
        id: "2",
        name: "Tokyo Sushi",
        cuisine: "Japonesa",
        rating: "4.9",
        deliveryInfo: "R$ 2,99",
        time: "15-25 min",
        image: assets.tokioSushi,
    },
];

export default function NotificationScreen() {
    return (
        <ScrollView>
            {/* Seção: Cards Destacados */}
            <Text style={styles.sectionTitle}>⭐ Restaurantes em Destaque</Text>
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant}>
                    <RestaurantCard.Image />
                    <RestaurantCard.Content>
                        <RestaurantCard.Header />
                        <RestaurantCard.Specialties />
                        <RestaurantCard.Info />
                    </RestaurantCard.Content>
                </RestaurantCard>
            ))}
        </ScrollView>
    );
}
