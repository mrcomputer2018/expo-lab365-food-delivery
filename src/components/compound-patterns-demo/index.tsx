import { createContext, useContext } from "react";
import { View, Text, Image } from "react-native";
import { restaurantCardStyles as styles } from "./restaurant-card.styles";

type RestaurantCardData = {
    id: string;
    name: string;
    cuisine: string;
    specialties?: string;
    rating: string;
    deliveryInfo: string;
    time: string;
    image: string;
};

const RestaurantCardContext = createContext<RestaurantCardData | null>(null);

function useRestaurantCard() {
    const context = useContext(RestaurantCardContext);
    if (!context) {
        throw new Error("RestaurantCard.* deve ser usado dentro de <RestaurantCard>");
    }
    return context;
}

interface RestaurantCardProps extends RestaurantCardData {
    children: React.ReactNode;
}

function RestaurantCard({ children, ...data }: RestaurantCardProps) {
    return (
        <RestaurantCardContext.Provider value={data}>
            <View style={styles.card}>{children}</View>
        </RestaurantCardContext.Provider>
    );
}

function RestaurantCardImage() {
    const { image, name } = useRestaurantCard();
    return <Image source={image as any} style={styles.image} accessibilityLabel={name} />;
}

function RestaurantCardContentWrapper({ children }: { children: React.ReactNode }) {
    return <View style={styles.content}>{children}</View>;
}

function RestaurantCardHeader() {
    const { name, rating } = useRestaurantCard();
    return (
        <View style={styles.header}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rating}>⭐ {rating}</Text>
        </View>
    );
}

function RestaurantCardSpecialties() {
    const { cuisine, specialties } = useRestaurantCard();
    return (
        <>
            <Text style={styles.cuisine}>{cuisine}</Text>
            {specialties && <Text style={styles.specialties}>{specialties}</Text>}
        </>
    );
}

function RestaurantCardInfo() {
    const { deliveryInfo, time } = useRestaurantCard();
    return (
        <View style={styles.infoRow}>
            <Text style={styles.infoText}>{deliveryInfo}</Text>
            <Text style={styles.infoText}>{time}</Text>
        </View>
    );
}

RestaurantCard.Image = RestaurantCardImage;
RestaurantCard.Content = RestaurantCardContentWrapper;
RestaurantCard.Header = RestaurantCardHeader;
RestaurantCard.Specialties = RestaurantCardSpecialties;
RestaurantCard.Info = RestaurantCardInfo;

export default RestaurantCard;
