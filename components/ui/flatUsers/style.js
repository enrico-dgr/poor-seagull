import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#CFE9FD",
        marginTop: 15,
        // justifyContent: "center",
        alignItems: "center",
    },
    viewUsers: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: 50,
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 10,
        padding: 8,
    },
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,

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
        fontFamily: "Sponge",
        fontSize: 20,
        width: 300,
        color: "#2353aa",
    },
});
