import { FlatList } from "react-native";
import RestaurantsOpenCard from "./RestaurantsOpenCard/RestaurantsOpenCard";
import { restaurantOpenListStyles as styles } from "../styles/restaurant-open-list-styles";
import { restaurants } from "../constants/restaurants";

export default function RestaurantsOpenList() {
    return (
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantsOpenCard {...item} />}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 10 }}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerCard}
        />
    );
}
