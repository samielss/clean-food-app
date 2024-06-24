// Importando dependências
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Octicons'
//Importando componentes
import Home from "../screens/Home";
import Search from "../screens/Search";
import ItensSalvos from "../screens/ItensSalvos";
import Perfil from "../screens/Perfil";

// Criando o componente de função
export default props => {
    // Definindo a varíavel de navegação
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarStyle: { backgroundColor: "#FF8F8F", height: 70 } }}>
            <Tab.Screen name="Home" component={Home}
                options={
                    {
                        headerShown: false,
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
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" color="#FFECD6" size={40} />),
                    tabBarShowLabel: false
                }}
            />
        </Tab.Navigator>
    )
}


