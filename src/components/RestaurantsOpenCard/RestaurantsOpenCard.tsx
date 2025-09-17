import { View, Text, Image } from "react-native";
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
    image: string;
}

export default function RestaurantsOpenCard({...props}: RestaurantsOpenCardProps) {
    return (
        <View style={styles.restaurantCard}>

            <Image
                source={{ uri: props.image }}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.infoSection}>
                <View>
                    <Text style={styles.restaurantName}>
                        {props.name}
                    </Text>
                    <Text style={styles.cuisineType}>{props.cuisine}</Text>
                    <Text style={styles.specialties}>
                        Frango - Burgers - Wings
                    </Text>
                </View>

                <View style={styles.deliveryInfoSection}>
                    <View style={styles.container}>
                        <Feather name="star" size={12} color="#66BE70" />
                        <Text style={styles.textInfo}>{props.rating}</Text>
                    </View>
                    <View>
                        <Text style={styles.textInfo}>{props.deliveryInfo}</Text>
                    </View>
                    <View style={styles.container}>
                        <Feather name="clock" size={12} color="#66BE70" />
                        <Text style={styles.textInfo}>{props.time}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
