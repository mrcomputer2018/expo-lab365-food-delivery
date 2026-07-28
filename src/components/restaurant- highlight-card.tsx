import { useState } from "react";
import { Image, View, Text } from "react-native";
import { restaurantHighlightCardStyles as styles } from "../styles/restaurant-highlight-card-styles";

export function RestaurantHighlightCard({...item}) {
    const [ favorited, setFavorited ] = useState<boolean>(false)

    return (
        <View style={ styles.container }>
            <View style={ styles.infoContainer }>
                <Image source={item.image} style={ styles.image }/>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.address}</Text>
                </View>
            </View>
        </View>
    )
}