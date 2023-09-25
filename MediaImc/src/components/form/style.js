import { StyleSheet } from "react-native";
import form from ".";

const styles=StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginTop: 20,
        


    },
    form:{
        width:"100%",
        height:"100%",
        marginTop:30,
        padding:10,
    },
    label:{
        color:"#172026",
        fontSize:18,
        paddingLeft: 20,

    },
    input:{
        width:"auto",
        height:20,
        bordertRadius:20,
        backgroundColor:"#5FCDD9",
        height:40,
        margin:12,
        paddingLeft:10,
        
    },

    buttonCalculator:{
        borderRadius:57,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"#A8E1EF",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30
    },
    textButtonCalculator:{
        font:16,
        color:"F5D3B4",
        fontWeight:"bold",
    },
    errorMessage:{
        fontSize:12,
        color: "red",
        fontWeight:"bold",
        paddingLeft:10,
    },

})
export default styles