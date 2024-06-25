//Importando dependências do projeto
import { Card, ListItem } from "@rneui/base";
import { ThemeProvider } from "@rneui/themed";
import React from "react";
import { View, TextInput, StyleSheet, Text, Pressable, Image } from "react-native";
import { FlatList } from "react-native";
//Importando componentes

// Criando o componente de função
export default props => {
    function getListItem({ item: recipe }) {
        return (
            <ThemeProvider>
                <ListItem style={{ flex: 1 }}>
                    <Card>
                        <View>
                            <ListItem.Title>Título da Receita</ListItem.Title>
                        </View>
                    </Card>
                </ListItem>
            </ThemeProvider>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <ThemeProvider>
                {/* <ListItem style={{ flex: 1 }}> */}
                    <View style={{flexDirection: "row"}}>
                        <View>
                            <Text>Título da Receita</Text>
                            <Text>Descrição da receita</Text>
                            <Pressable>
                                <Text>Ver receita</Text>
                            </Pressable>
                        </View>
                        <Card.Image/>
                    </View>
                {/* </ListItem> */}
            </ThemeProvider>
            {/* <FlatList
            renderItem={getListItem}
            /> */}
        </View>
    )
}