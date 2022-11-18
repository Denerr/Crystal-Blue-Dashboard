import { StyleSheet } from "react-native";
import theme from "../../global/theme";

const dashStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.colors.background,
    },
    title:{
        color: theme.colors.title,
        fontWeight: "bold",
        fontSize: 45,
        alignItems: "center",
        textAlign: "center",
        marginTop: 75,
        borderWidth: 1.5,
        borderRadius: 25,
        borderColor: theme.colors.primary,
    },
    text:{
        textAlign: "center",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize: 30,
        color: theme.colors.primary,
        marginTop: 25,
    },
    image:{
        alignItems: "center",
        justifyContent: "center",
        width: 400,
        height: 300,
    }
})

export default dashStyles;