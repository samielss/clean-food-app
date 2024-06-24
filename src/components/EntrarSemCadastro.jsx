//Importando dependências do projeto
import React, { Component } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
//Importando componentes
import Input from "../components/Input";
import defaultStyle from "../defaultStyle";



//Criando o componente de função
export default props => {
    return (
        <Pressable style={styles.entrarSem} onPress={props.route}><Text style={styles.entrar}>Entrar sem cadastro</Text></Pressable>
    )
}

const styles = StyleSheet.create(
    {
        entrarSem : {
            flex: 1, 
            alignSelf: "flex-end",
            padding: 20
        },
        entrar: {
            color: defaultStyle.colors.creme,
            fontWeight: "bold"
        }
    }
)