import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
    },
    titleContainer: {
        flexGrow: 1,
        marginTop: 5,
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontFamily: "Toons",
        fontSize: 30,
        marginBottom: 10,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },
    subtitle: {
        fontFamily: "Toons",
        fontSize: 40,
        color: "#364d79",
    },
    slideChoice: {
        marginVertical: 20,
        width: 75,
        height: 79,
    },
    question: {
        marginVertical: 20,
        width: 79,
        height: 79,
    },
    enemybox: {
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        borderRadius: 10,
        backgroundColor: "#f9fbff",
    },
    slideContainer: {
        flex: 1,
        height: "25%",
        alignItems: "center",
        justifyContent: "center",
    },
    boxchoice: {
        height: 250,
        width: 300,
        justifyContent: "center",
        backgroundColor: "#f9fbff",
        borderRadius: 10,
        marginBottom: 15,
    },
});
