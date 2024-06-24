//Importando dependências do projeto
import React, { Component } from "react";
import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Text } from "@rneui/themed"
//importando imagens 
import defaultStyles from "../defaultStyle";
import getImgBackground from "../../assets/img/CadastroBackground.png"
import getImgFood from "../../assets/img/prato-um.png"

//Importando componentes
import Input from "../components/Input";
import defaultStyle from "../defaultStyle";
import EntrarSemCadastro from "../components/EntrarSemCadastro";



//Criando o componente de função
export default props => {

    return (
        <View style={styles.body}>
            <ImageBackground source={getImgBackground} style={styles.background} resizeMode="cover">
                <EntrarSemCadastro route={() => props.navigation.navigate('Tab')}/>
                <View style={styles.container1}>
                    <Text style={styles.title}>Clean Food</Text>
                    <Image source={getImgFood} />
                    <Text style={styles.subTitle}>Criar uma conta</Text>
                </View>
                <View style={styles.container2}>
                    <Input placeholder="Name" iconName="user" />
                    <Input placeholder="Email" iconName="at" />
                    <Input placeholder="Nova senha" iconName="lock" />
                    <Input placeholder="Confirmar senha" iconName="lock" />
                </View>
                <View style={styles.container3}>
                <Pressable style={styles.button} >
                    <Text style={{ color: defaultStyle.colors.rosaSalmao, fontSize: 15 }}>Criar conta</Text>
                </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}


// Estilos
const styles = StyleSheet.create(
    {
        body: {
            flex: 1,
            justifyContent: "center",
        },
        background: {
            flex: 1,
            alignItems: "center",
        },
        entrar: {
            color: defaultStyle.colors.creme,
            fontWeight: "bold"
        },
        container1: {
            flex: 7,
            alignItems: "center"
        },
        container2: {
            flex: 5,
            alignItems: "center",
        },
        container3:{
            flex: 2
        },
        title: {
            color: defaultStyles.colors.creme,
            fontWeight: "bold",
            fontSize: 45
        },
        subTitle: {
            color: defaultStyles.colors.creme,
            fontSize: 45,
            fontWeight: "bold"
        },
        button: {
            width: "30%",
            padding: 10,
            backgroundColor: defaultStyles.colors.creme,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
        }
    }
)