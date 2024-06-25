import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text,} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from "@react-navigation/drawer";


export default class HomeScreen extends Component {

    render() {

        return(
            <SafeAreaView style={styles.home}>
                <Text style={styles.titulo}>Bem vindo</Text>
            </SafeAreaView>
        );
    }   
}
const styles = StyleSheet.create(
    {
        home:{
            flex:1,
            backgroundColor:"#483F68"
        },
        titulo:{
            marginTop:150,
            marginHorizontal:125,
            fontSize:40,
            color:"#FFECD6",
            fontFamily:"Jomhuria",
            fontWeight:"bold"
        },
    }
)