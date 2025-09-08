import { ScrollView, Image, View, Text } from "react-native";
import { assets } from "../../assets/assets";
import { homeStyles as styles } from "../styles/home-styles";
import CategoryItem from "./category-item";

export default function ScrollCategories() {
    const categories = [
        {
            id: "1",
            title: "Pizza",
            imageUrl: assets.pizzaCategory,
            price: "55,90",
        },
        {
            id: "2",
            title: "Hamburguer",
            imageUrl: assets.hamburgerCategory,
            price: "32,90",
        },
        {
            id: "3",
            title: "Sushi",
            imageUrl: assets.sushiCategory,
            price: "62,90",
        },
    ];
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
            decelerationRate="fast"
            snapToInterval={174}
            snapToAlignment="start"
        >
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    imageUrl={category.imageUrl}
                    price={ category.price}
                />
            ))}
        </ScrollView>
    );
}
