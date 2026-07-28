import { View, Text } from "react-native";
import { restaurantOpenListStyles as styles } from "../../styles/restaurant-open-list-styles";
import { Feather } from "@expo/vector-icons";
import RestaurantImage from "./restaurant-image";
import { RestaurantsOpenCardProps } from "../../types/restaurant-types";
import RestaurantsOpenCardInfoSection from "./restaurant-info-section";

export default function RestaurantsOpenCard({
    ...props
}: RestaurantsOpenCardProps) {
    return (
        <View style={styles.restaurantCard}>
            <RestaurantImage image={props.image} />

            <View style={styles.infoSection}>
                <RestaurantsOpenCardInfoSection>
                    <Text style={styles.restaurantName}>{props.name}</Text>
                    <Text style={styles.cuisineType}>{props.cuisine}</Text>
                    <Text style={styles.specialties}>
                        { props.specialties }
                    </Text>
                </RestaurantsOpenCardInfoSection>

                <View style={styles.deliveryInfoSection}>
                    <View style={styles.container}>
                        <Feather name="star" size={16} color="#66BE70" />
                        <Text style={styles.textInfo}>{props.rating}</Text>
                    </View>
                    <View>
                        <Text style={styles.textInfo}>
                            {props.deliveryInfo}
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Feather name="clock" size={16} color="#66BE70" />
                        <Text style={styles.textInfo}>{props.time}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
