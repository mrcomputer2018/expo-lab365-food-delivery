import { StyleSheet } from "react-native";

export const scrollTitleStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    button: {
        flexDirection: "row",
        alignItems: "center"
    },
    textButton : { 
        color: "#00c66f",
        fontSize: 14,
    }
})