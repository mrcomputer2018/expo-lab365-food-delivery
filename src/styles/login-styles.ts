import { StyleSheet} from "react-native"

export const loginStyles = StyleSheet.create({
    areaForgotPassword: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 240
    },
    section: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2
    },
    paragraph: {
        color: "#66BE70",
        fontSize: 16
    },
    inputIcon: {
        position: "absolute",
        top: 47,
        left: 10,
        zIndex: 1,
    },
})