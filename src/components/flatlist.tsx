import { FlatList, View, Text } from "react-native";

interface FlatListComponent {
    id: string;
    name: string;
    price: number;
}

export default function FlatListComponent() {
    const carts: FlatListComponent[] = [
        {
            id: "1",
            name: "Product 1",
            price: 10.0,
        },
        {
            id: "2",
            name: "Product 2",
            price: 20.0,
        },
    ];

    return (
        <FlatList
            data={carts}
            renderItem={({ item: cart }) => (
                <View>
                    <Text>
                        {cart.name} - {cart.price}
                    </Text>
                </View>
            )}
            keyExtractor={(item) => item.id}

        />
    );
}
