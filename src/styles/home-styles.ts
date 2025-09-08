import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    scroll: {
        flex: 1,
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 16,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 8
    },
    areaCard: {
        width: 140,
        height: 180,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 12,
        justifyContent: "flex-start",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        marginRight: 14
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    textCard: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        width: "100%"
    },
    priceContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 2,
        paddingHorizontal: 6
    },
    TextPrice: {
        fontSize: 13,
        color: "#66BE70",
        fontWeight: "bold"
    }
})