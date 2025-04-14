import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    imageTop: {
        width: 600,
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333333",
    },
    description: {
        color: "#333333",
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 6,
        backgroundColor: "#fff",
    },
    label: {
        fontSize: 16,
        color: "#333333",
        marginBottom: 10,
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#66BE70",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textButton: {
        color: " #fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    FormGroup: {
        position: "absolute",
        top: "30%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: "#999",
        borderWidth: 1,
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",
    },
});
