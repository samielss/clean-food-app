// Importando dependências
import { SearchBar } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//Importando componentes

// Criando o componente de função
export default props => {
    // Definindo a varíavel de navegação
    return (
        <View style={Style.fundo}>
            <Text style={Style.tituloSalvos}>Receitas Salvas</Text>
        </View>
    )
}

const Style = StyleSheet.create(
    {
        fundo: {
            flex: 1,
            backgroundColor: "#483F68"
        },
        tituloSalvos: {
            marginTop:40,
            textAlign: "center",
            fontSize:70,
            color:"#FFECD6",
            fontFamily: 'Jomhuria'
        },
    }
)
