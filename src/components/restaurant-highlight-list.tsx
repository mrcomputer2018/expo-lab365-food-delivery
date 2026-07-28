import { FlatList } from "react-native";
import { restaurantHighlight } from "../constants/restaurants";
import { RestaurantHighlightCard } from "./restaurant- highlight-card";

export function RestaurantHighlightList() {
    return (
        <FlatList
            data={restaurantHighlight}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => < RestaurantHighlightCard {...item}/>}
            scrollEnabled={false}
        />
    );
}
