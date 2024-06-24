//Importando dependências do projeto
import React,{ Component,useState,useEffect } from "react";
import { Alert, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
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


export default props => {
    
    const [user,setUser] = useState([])
    const [email,setEmail] = useState([])
    const [senha,setSenha] = useState([])
    const [csenha,setCsenha] = useState([])

    const hanleCadastro = async (event) => {
        
//Verfificando as senhas 
        if(senha !== csenha){
            Alert.alert('As senhas não coincidem');
            return;
        }
    }

        return (
            <SafeAreaView style={styles.body}>
                <ImageBackground source={getImgBackground} style={styles.background} resizeMode="cover">

                    <View style={styles.container1}>
                        <Text style={styles.title}>Clean Food</Text>
                        <Image source={getImgFood} />
                        <Text style={styles.subTitle}>Criar uma conta</Text>
                    </View>

                    <View style={styles.container2}>
                        <Input placeholder="Name" iconName="user" valor={user}   onChangeText={(e) => setUser(e.target.valor)}/>
                        <Input placeholder="Email" iconName="at" valor={email} onChangeText={(e) => setEmail(e.target.valor)}/>
                        <Input placeholder="Nova senha" iconName="lock" valor={senha}  onChangeText={(e) => setSenha(e.target.valor)}/>
                        <Input placeholder="Confirmar senha" iconName="lock"  valor={csenha} onChangeText={(e) => setCsenha(e.target.valor)}/>
                    </View>
                    <Pressable style={styles.button}  >
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