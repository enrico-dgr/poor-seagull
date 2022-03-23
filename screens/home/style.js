import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleContainer: {
        flexGrow: 1,
        marginTop: 80,
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontFamily: "Toons",
        fontSize: 50,
    },
    subtitle: {
        fontFamily: "Toons",
        fontSize: 30,
        color: "#2353aa",
    },
});
