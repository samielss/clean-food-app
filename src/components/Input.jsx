//Importando dependências do projeto
import React, {useState} from "react";
//Importando componentes
import { View,TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from "../defaultStyle";
import defaultStyle from "../defaultStyle";




export default props => {

 
    return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    label={props.label}
                    textAlign="left"
                    keyboardType={props.keyboardType}
                    placeholder={props.placeholder}
                    maxLength={60}
                    placeholderTextColor={defaultStyle.colors.creme}
                    
                />
                <Icon name={props.iconName} size={20} color="#FFECD6" style={styles.icon}/>
            </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection:"row",
            alignItems:"flex-end",
            justifyContent:"space-between", 
            borderBottomWidth:1,
            borderColor:"#FFECD6",
            borderRadius:6,
            width:"70%",
            
        },
        input:{
            fontWeight:"bold",
        },
        icon:{
            marginRight:5,
            padding: 5
        }
    }
)