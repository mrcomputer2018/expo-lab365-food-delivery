import { StyleSheet } from "react-native"

export const headerLeftStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 20,
        marginLeft: 16,
    },
    buttonArea: {
        backgroundColor: "#E5F4E7",
        borderRadius: 16,
        padding: 8
    },
    text: {
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "bold",
        color: "#66BE70"
    },
    userName: {
        color: "#333"
    }

})