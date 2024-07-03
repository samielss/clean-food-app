// Importando dependências
import { SearchBar } from "@rneui/themed";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
//Importando componentes
import { Dimensions } from "react-native";
// Criando o componente de função
const {width} = Dimensions.get("window")
export default props => {
    // Definindo a varíavel de navegação
    return (
        <View style={Style.fundo}>
            <View  style={Style.containerInput}>
            <TextInput style={Style.inputStyle}/>
            <Icon name="search" size={30} color="#FFECD6"/>
            </View>
        </View>
    )
}

const Style = StyleSheet.create(
    {
        fundo: {
            flex: 1,
            backgroundColor:"#483F68",
            alignItems: "center",
            paddingTop: 15
        },
        containerInput:{
            borderWidth: 4,
            borderRadius: 10,
            borderColor: "#1E1A39",
            width: width/1.1,
            flexDirection: "row",
            alignItems: "center",
            padding: 5
        },
        inputStyle: {
            width: width/1.3,
            color: "#FFECD6",
            fontSize: 20
        }
    }
)