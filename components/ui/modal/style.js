import { StyleSheet } from "react-native";
export default StyleSheet.create({
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    modalContent: {
        height: "100%",
        backgroundColor: "#CFE9FD",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    title: {
        marginTop: 60,
        marginBottom: 20,
        fontSize: 50,
        fontFamily: "Toons",
        textAlign: "center",
    },
    buttonContainer: {
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        fontFamily: "Toons",
        fontSize: 30,
    },
    viewPlayersNumber: {
        width: "70%",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    viewButtonsCircles: {
        marginBottom: 40,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
    },
});
