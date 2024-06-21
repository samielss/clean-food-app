// Importando dependências
import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stacks/Stack";
//Importando componentes

// Criando o componente de função
export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack/>
            </NavigationContainer>
        </SafeAreaView>
    )
}

