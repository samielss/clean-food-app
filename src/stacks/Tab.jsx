// Importando dependências
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Octicons'
//Importando componentes
import Home from "../screens/Home";
import Search from "../screens/Search";
import ItensSalvos from "../screens/ItensSalvos";
import Perfil from "../screens/Perfil";
import { Image } from "react-native";
import { View } from "react-native";

// Criando o componente de função
export default props => {
    // Definindo a varíavel de navegação
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarStyle: { backgroundColor: "#1E1A39", height: 70 } }}>
            <Tab.Screen name="Home" component={Home}
                options={
                    {
                        headerBackgroundContainerStyle: {backgroundColor: "#483F68"},
                        headerStyle: { backgroundColor: "#7C73C0", borderBottomRightRadius: 30, borderBottomLeftRadius: 30, height: 90 },
                        title: "Clean Food",
                        headerRight: ({ color }) => (
                            <View style={{backgroundColor:"#1E1A39", borderRadius: 50, padding: 10, marginRight: 10}}>
                            <Image source={require('../../assets/img/chef-icon.png')} style={{ width: 50, height: 50 }} />
                            </View>
                        ),
                        headerTintColor: "#FFECD6",
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color="#FFECD6" size={40} />),
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: "#483F68"
                    }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="search" color="#FFECD6" size={40} />),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen name="ItensSalvos" component={ItensSalvos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="heart" color="#FFECD6" size={40} />),
                    tabBarShowLabel: false
                }}
            />
            {/* <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" color="#FFECD6" size={40} />),
                    tabBarShowLabel: false
                }}
            /> */}
        </Tab.Navigator>
    )
}


