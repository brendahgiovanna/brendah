import React, { useState} from "react";
import { TextInput, View, Text, Button, TouchableOpacity, Vibration, setErrorMessage } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

    
    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2]= useState(null);
    const [nota3, setNota3] = useState(null);
    const [nota4, setNota4]= useState(null);
    const [messageImc, setMessageImc] =useState ("Preencha com a media");
    const [imc, setImc] =useState (null);
    const [textButton, setTextButton]=useState ("Calcular Media");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator(){
        return setImc((4/(nota1+nota2+nota3+nota4)).toFixed(2))
    }
    function verificationImc (){

        if(imc == null){
            setErrorMessage("Campo Obrigatório")
            Vibration.vibrate()
        }
     }
    function validationImc(){
        if (nota1 != null && nota2 !=null && nota3 != null && nota4 !=null){
        imcCalculator()
        setNota1(null)
        setNota2(null)
        setNota3(null)
        setNota4(null)
        setErrorMessage(null)
        setMessageImc(" Seu media é igual a: ")
        setTextButton ("Calcular Novamente")
        
    return
    }
    setImc(null)
    setTextButton("Calcular novamente")
    setMessageImc("Preencha com a Media")
    verificationImc()
    }

return(
    <View style={styles.formContext}>
        <View styles={styles.form}>

            <Text style={styles.label}>Media1</Text>
            <Text style ={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} value={nota1} placeholder="Ex: 5" keyboardType="numeric"/>
        

            <Text style={styles.label}t>Media2</Text>
            <Text style ={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} value={nota2} placeholder="Ex: 5" keyboardType="numeric"/>

            <Text style={styles.label}>Media3</Text>
            <Text style ={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} value={nota3} placeholder="Ex: 5" keyboardType="numeric"/>
        

            <Text style={styles.label}t>Media4</Text>
            <Text style ={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} value={nota4} placeholder="Ex: 5" keyboardType="numeric"/>


            <ResultImc messageResultImc={messageImc} resultImc={imc}/>

            <TouchableOpacity style={styles.buttonCalculator} onPress={()=>validationImc}>{textButton}</TouchableOpacity>
            <Text style={styles.textButtonCalculator}></Text><TouchableOpacity/>

        </View>
        
    </View>
);
}
 