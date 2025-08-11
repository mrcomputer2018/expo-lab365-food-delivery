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
    }
})