import { StyleSheet } from "react-native";

export const restaurantOpenListStyles = StyleSheet.create({
    restaurantCard: {
        width: 384,
        marginHorizontal: 10,
        marginVertical: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    image: {
        width: "100%",
        height: 120,
    },
    infoSection : {
        paddingVertical: 14,
        paddingHorizontal: 20
    },
    restaurantName: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#121212",
    },
    cuisineType: {
        fontSize: 14,
        color: "#666",
        marginBottom: 2,
    },
    specialties: {
        fontSize: 14,
        color: "#666",
        opacity: 0.8,
        marginBottom: 2,
    },
    deliveryInfoSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    textInfo: {
        color: "#666",
        opacity: 0.8,
    }

});
