import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
    },
    modal: {
        backgroundColor: "#C7662B",
        margin: 20,
        padding: 20,
        borderRadius: 12,
        elevation: 10,
    },
    modalContent: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 20,
    },
    textResult: {
        margin: 20,
        color: "#6BBB85",
        fontSize: 56,
        fontWeight: "bold",
    },
    button: {
        marginTop: 20,
        borderRadius: 12,
        backgroundColor: "#6BBB85",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        float: "left",
    },
});

export default styles;