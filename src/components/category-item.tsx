import { View, Text, Image } from "react-native";
import { homeStyles as styles } from "../styles/home-styles";

interface CategoryItemProps {
    id: string;
    title: string;
    imageUrl?: string;
    price: string;
}
export default function CategoryItem({
    id,
    title,
    imageUrl,
    price,
}: CategoryItemProps) {
    return (
        <View style={styles.areaCard} key={id}>
            <Image
                source={
                    typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl
                }
                style={styles.image}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.textCard}>{title}</Text>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.TextPrice}>Partir de:</Text>
                <Text style={styles.TextPrice}>RS {price}</Text>
            </View>
        </View>
    );
}
