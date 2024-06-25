//Importando dependências do projeto
import React,{useState,useEffect, useId } from "react";
import {Alert, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Text } from "@rneui/themed"

//importando imagens e estilo geral 
import CommonStyles from "../defaultStyle";
import getImgBackground from "../../assets/img/CadastroBackground.png"
import getImgFood from "../../assets/img/prato-um.png"

//Importando componentes
import Input from "../components/Input";
import { color } from "@rneui/base";
import defaultStyle from "../defaultStyle";

//Importando a api
import api from '../services/Api'
import axios from "axios";


export default props => {
  
//Criando os destrutores para entratada de texto 
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [confirmaSenha,setConfirmaSenha] = useState('')

    const [err,setErr] = useState('')

 //Verificando as senhas
    const validadoSenha = () => {
        if (senha !== confirmaSenha) {
            setErr('As senhas não coincidem');
                return false;
        }
        setErr('')
        return true;
};

//Ligação da api 
    const registro = async (event) => {
        event.preventDefault()

        if(validadoSenha()){
            const response = await axios.post('http://localhost:3000/usuarios', {
                nome: user,
                email: email,
                senha: senha
            });
        }

    };




        return (
            <SafeAreaView style={styles.body}>
                <ImageBackground source={getImgBackground} style={styles.background} resizeMode="cover">

                    <View style={styles.container1}>
                        <Text style={styles.title}>Clean Food</Text>
                        <Image source={getImgFood} />
                        <Text style={styles.subTitle}>Criar uma conta</Text>
                    </View>

                    <View style={styles.container2}>
                        <Input placeholder="Name" iconName="user" value={user} onChangeText={setUser}/>
                        <Input placeholder="Email" iconName="at" value={email} onChangeText={setEmail}/>
                        <Input placeholder="Nova senha" iconName="lock" value={senha} onChangeText={setSenha}/>
                        <Input placeholder="Confirmar senha" iconName="lock"  value={confirmaSenha} onChangeText={setConfirmaSenha}/>
                    </View>
                    <Pressable style={styles.button} onPress={registro}>
                        <Text style={{ color: defaultStyle.colors.rosaSalmao, fontSize: 15 }}>Criar conta</Text>
                    </Pressable>
                </ImageBackground>
            </SafeAreaView>
        )
    

}

const styles = StyleSheet.create({
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
        subTitle:{
            color: CommonStyles.colors.creme,
            fontSize: 45,
            margin: 10,
            fontWeight: "bold"
        },
        button:{
            width: "30%",
            padding: 10,
            backgroundColor: CommonStyles.colors.creme,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 40
        },
 })