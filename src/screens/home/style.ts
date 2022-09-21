import { StyleSheet } from "react-native"
const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    image: {
      alignItems: "center",
      justifyContent: "center",
      width: 400,
      height: 300,
    },
    titleText:{
      textAlign: "center",
      fontStyle:"normal",
      fontWeight:"bold",
      fontSize: 45,
      color: "cyan",
      marginTop: 75,
      borderWidth: 1.5,
      borderRadius: 25,
      borderColor: "cyan",
    },
    text:{
      textAlign: "center",
      fontStyle:"normal",
      fontWeight:"bold",
      fontSize: 30,
      color: "cyan",
      marginTop: 25,
    },
    contentText:{
      textAlign: "center",
      fontStyle:"normal",
      fontWeight: '300',
      fontSize: 20,
      color: "white",
      marginTop: 15,
    },
    textInput:{
      backgroundColor: "white",
      borderRadius: 20,
      padding: 10,
      marginHorizontal: 25,
      marginVertical: 15,
    },
    button:{
      alignItems: 'center',
      backgroundColor: 'cyan',
      marginVertical: 20,
      marginHorizontal: 115,
      padding: 15,
      borderRadius: 25,
    },
    hairline: {
      borderColor: 'white',
      borderWidth: 1,
      marginHorizontal: 35,
      marginTop: 12,
    },
});

export default homeStyles;