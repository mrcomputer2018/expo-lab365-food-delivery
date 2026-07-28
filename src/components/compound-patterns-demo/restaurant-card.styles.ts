import { StyleSheet } from "react-native";

export const restaurantCardStyles = StyleSheet.create({
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#121212",
        marginTop: 16,
        marginHorizontal: 20,
        marginBottom: 4,
    },
    card: {
        marginHorizontal: 20,
        marginVertical: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 120,
    },
    content: {
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#121212",
    },
    rating: {
        fontSize: 14,
        color: "#66BE70",
        fontWeight: "bold",
    },
    cuisine: {
        fontSize: 14,
        color: "#666",
        marginTop: 2,
    },
    specialties: {
        fontSize: 14,
        color: "#666",
        opacity: 0.8,
        marginTop: 2,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    infoText: {
        color: "#666",
        opacity: 0.8,
        fontWeight: "bold",
        fontSize: 14,
    },
});
