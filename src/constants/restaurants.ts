import { assets } from "../../assets/assets";

export const restaurants = [
    {
        id: "1",
        name: "Rose Garden Restaurant",
        cuisine: "Cozinha Americana",
        specialties: "Frango - Burgers - Wings",
        rating: "4.7",
        deliveryInfo: "Entrega grátis",
        time: "30 min",
        image: assets.roseGarden,
    },
    {
        id: "2",
        name: "Bella Italia",
        cuisine: "Cozinha Italiana",
        specialties: "Pizza - Pasta - Risotto",
        rating: "4.5",
        deliveryInfo: "Entrega R$ 5,00",
        time: "25 min",
        image: assets.bellaItalia,
    },
    {
        id: "3",
        name: "Tokyo Sushi",
        cuisine: "Cozinha Japonesa",
        specialties: "Sushi - Sashimi - Temaki",
        rating: "4.8",
        deliveryInfo: "Entrega grátis",
        time: "40 min",
        image: assets.tokioSushi,
    },
];

export const restaurantHighlight = [
     {
        id: "1",
        name: "Churrascaria e Pizzaria Boizão",
        address: "Alamensa santos, 958",
        image: assets.boizao,
        isFavorite: true
    },
    {
        id: "2",
        name: "The Keba’s Bar",
        address: "Rua Rui Barbosa, 512",
        image: assets.kebabs,
        isFavorite: false
    }

]
