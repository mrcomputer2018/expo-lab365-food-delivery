import { Image } from "react-native";
import { restaurantOpenListStyles as styles } from "../../styles/restaurant-open-list-styles";

export default function RestaurantImage({image} : any) {
    return (
        <Image
            source={image}
            style={styles.image}
            resizeMode="cover"
        />
    );
}
