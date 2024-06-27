//Importando dependências do projeto
import { Card, ListItem } from "@rneui/base";
import { ThemeProvider } from "@rneui/themed";
import React from "react";
import { View, TextInput, StyleSheet, Text, Pressable, Image } from "react-native";
import { Dimensions } from "react-native";
import { FlatList } from "react-native";
import data from "../data/data"
//Importando componentes
const {width} = Dimensions.get("window")
// Criando o componente de função
export default props => {
    function getListItem({ item: recipe }) {
        return (
                <View style={Style.card}>
                    <View style={Style.itensCard}>
                        <Text style={Style.tituloCard}>{recipe.title}</Text>
                        {/* <Text style={Style.descricaoCard}>{recipe.desc}</Text> */}
                        <Pressable style={Style.buttonCard} onPress={() => navigate.navigation()}>
                            <Text style={Style.buttonText}>Ver receita</Text>
                        </Pressable>
                    </View>
                    <Image source={require("../../assets/img/default-image.png")} style={Style.image} />
                </View>
        )
    }
    return (
        <FlatList
            horizontal
            snapToAlignment={"start"}
            keyExtractor={recipe => recipe.id.toString()}
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(data.lenght)].map((x,i)=> i * (width*0.8-40) + (i-1)*40)}
            decelerationRate="fast"
            data={data}
            renderItem={getListItem}
        />
    )
}

const Style = StyleSheet.create(
    {
        card: {
            flexDirection: "row",
            backgroundColor: "#1E1A39",
            height: width / 2.5,
            width: width * 0.8,
            justifyContent: "space-between",
            marginHorizontal: 10,
            borderRadius: 10
        },
        itensCard: {
            justifyContent: "space-between",
            padding: 15
        },
        tituloCard: {
            fontSize: 23,
            width: "70%",
            color: "#FFECD6",
            fontWeight: "bold"
        },
        descricaoCard: {
            fontSize: 12,
            color: "#FFf"
        },
        buttonCard: {
            padding: 10,
            borderRadius: 10,
            width: "80%",
            backgroundColor: "#7C73C0"
        },
        buttonText: {
            color: "#FFF",
            fontSize: 15,
            textAlign: "center",
            fontWeight: 'bold'
        },
        image: {
            borderRadius: 10,
            width: "46%",
            height: "100%"
        }
    }
)