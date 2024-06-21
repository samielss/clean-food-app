// Importando dependências
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Importando componentes
import Home from "../screens/Home";

// Criando o componente de função
export default props => {
    // Definindo a varíavel de navegação
    const Tab = createBottomTabNavigator()
    return (
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Home}/>
            </Tab.Navigator>
    )
}


