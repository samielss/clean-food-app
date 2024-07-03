import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text,} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ReceitasVegamas from "../components/ReceitasVeganas";
import ReceitasLactose from "../components/RecetiasSemLactose";



export default props =>{

        return(
            <SafeAreaView style={styles.home}>
                <ScrollView>
                <Text style={styles.titulo}>Bem vindo</Text>
                <Text style={styles.titulo2}>Receitas Veganas</Text>
                <ReceitasVegamas/>
                <Text style={styles.titulo2}>Título do Feed</Text>
                <ReceitasLactose/>
                <Text style={styles.titulo2}>Título do Feed</Text>
                {/* <Carrossel/> */}
                </ScrollView>
            </SafeAreaView>
        );
    }   

const styles = StyleSheet.create(
    {
        home:{
            flex:1,
            backgroundColor:"#483F68"
        },
        titulo:{
            marginTop:40,
            textAlign: "center",
            fontSize:70,
            color:"#FFECD6",
            fontFamily: 'Jomhuria'
        },
        titulo2:{
            marginTop:5,
            textAlign: "center",
            fontSize:50,
            color:"#FFECD6",
            fontFamily: 'Jomhuria'
        },
    }
)