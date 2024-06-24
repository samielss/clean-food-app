// Importando dependências
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../screens/Cadastro";
import Tab from "./Tab";
//Importando componentes

// Criando o componente de função
export default props => {
    // Definindo a varíavel de navegação
    const Stack = createNativeStackNavigator()
    return (
            <Stack.Navigator initialRouteName="Cadastro">
                <Stack.Screen name="Cadastro" component={Cadastro}
                //Personalizando a Stack
                options={{
                    headerShown: false
                }}
                />
                <Stack.Screen name="Tab" component={Tab}
                //Personalizando a Stack
                options={{
                    headerShown: false
                    
                }}
                />
            </Stack.Navigator>
    )
}

