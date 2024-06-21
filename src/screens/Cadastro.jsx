//Importando dependências do projeto
import React,{ Component,useState,useEffect } from "react";
import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Text } from "@rneui/themed"
//importando imagens 
import CommonStyles from "../defaultStyle";
import getImgBackground from "../../assets/img/CadastroBackground.png"
import getImgFood from "../../assets/img/prato-um.png"

//Importando componentes
import Input from "../components/Input";
import { color } from "@rneui/base";
import defaultStyle from "../defaultStyle";

//Importando a api
import api from '../services/Api'



//Criando componente de class ("Esse será o compnente visto pelo usuário")
export default props => {
    
        return (
            <SafeAreaView style={styles.body}>
                <ImageBackground source={getImgBackground} style={styles.background} resizeMode="cover">

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
                    <Pressable style={styles.button}>
                        <Text style={{ color: defaultStyle.colors.rosaSalmao, fontSize: 15 }}>Criar conta</Text>
                    </Pressable>
                </ImageBackground>
            </SafeAreaView>
        )
    
}

const styles = StyleSheet.create(
    {
        body: {
            flex: 1,
            justifyContent: "center",
        },
        background: {
            flex: 1,
            alignItems: "center",
            paddingTop: 80
        },
        container1: {
            alignItems: "center"
        },
        container2: {
            alignItems: "center",
            justifyContent: "space-between",
        },
        title: {
            fontFamily: "johmuria",
            color: CommonStyles.colors.creme,
            fontWeight: "bold",
            fontSize: 45

        },
        subTitle: {
            color: CommonStyles.colors.creme,
            fontSize: 45,
            margin: 10,
            fontWeight: "bold"
        },
        button: {
            width: "30%",
            padding: 10,
            backgroundColor: CommonStyles.colors.creme,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 40
        }
    }
)