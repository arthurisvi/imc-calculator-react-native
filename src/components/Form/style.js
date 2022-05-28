import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxForm: {
        width: "100%",
        height: "100%",
        bottom: 0,
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#6BBB85",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 40,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 20,
    },
    input: {
        padding: 10,
        marginTop: 12,
        backgroundColor: "white",
        borderRadius: 12,
    },
    button: {
        marginTop: 25,
        borderRadius: 12,
        backgroundColor: "#C7662B",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    textButton: {
        fontSize: 20,
        color: "white",
    },
});

export default styles;