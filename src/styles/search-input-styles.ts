import { StyleSheet } from "react-native";

export const searchInputStyles = StyleSheet.create({
    searchInputArea: {
        marginHorizontal:16,
        backgroundColor: "#ddd",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        marginTop: 16,
        marginBottom: 20,
        paddingHorizontal: 8,
        borderColor: "#ccc",
        borderWidth: 1
    },
    input : {
        flex: 1,
        paddingLeft: 8,
        fontSize: 16,
    }
});
