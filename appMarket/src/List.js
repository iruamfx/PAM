import React, {useState} from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";

export default function List(){
    const names = [
        {
            id: 0,
            nome: "Manteiga",
            descricao: "Manteiga cremosa e saborosa, ideal para cozinhar e temperar.",
            ingredientes: "Creme de leite, Sal e Gordura",
            preco: 7.49,
            valor_calorico: 717
        },
        {
            id: 1,
            nome: "Leite Integral",
            descricao: "Leite integral fresco e nutritivo.",
            ingredientes: "Leite integral",
            preco: 3.49,
            valor_calorico: 60
        },
        {
            id: 2,
            nome: "Pão Francês",
            descricao: "Pão francês crocante e fresco.",
            ingredientes: "Farinha de trigo, Água, Fermento, Sal",
            preco: 0.99,
            valor_calorico: 250
        },
        {
            id: 3,
            nome: "Arroz Branco",
            descricao: "Arroz branco de qualidade superior.",
            ingredientes: "Arroz Branco, Conservante",
            preco: 5.99,
            valor_calorico: 365
        },
        {
            id: 4,
            nome: "Feijão Preto",
            descricao: "Feijão preto nutritivo e versátil.",
            ingredientes: "Feijão preto, Conservante",
            preco: 4.49,
            valor_calorico: 339
        },
        {
            id: 5,
            nome: "Cereal Matinal",
            descricao: "Cereal matinal crocante e cheio de fibras.",
            ingredientes: "Aveia, Açúcar, Sal, Vitaminas e Minerais",
            preco: 6.29,
            valor_calorico: 370
        },
        {
            id: 6,
            nome: "Suco de Laranja",
            descricao: "Suco de laranja 100% natural.",
            ingredientes: "Suco de laranja integral",
            preco: 4.79,
            valor_calorico: 45
        },
        {
            id: 7,
            nome: "Queijo Mussarela",
            descricao: "Queijo mussarela suave e saboroso.",
            ingredientes: "Leite, Culturas bacterianas, Renina, Sal, Gordura",
            preco: 8.99,
            valor_calorico: 280
        }       
    ]

    const alertItemName = (item) => {
        alert("IRUAM ATACADO & VAREJO \n\nProduto: " + item.nome + "\nDescrição: " + item.descricao + "\nIngredientes: " + item.ingredientes + "\nPreco: " + item.preco + "R$\nValor Calorico: " + item.valor_calorico + "kcal");
    }

    const renderItems = () => {
        return names.map((item) => 
            <TouchableOpacity
                key={item.id}
                style={styles.button}
                onPress={() => {alertItemName(item)}}    
            >
                <View style={styles.item}>
                    <Text style={styles.text}>
                        {item.nome}
                    </Text>
                </View>
            </TouchableOpacity> 
        );
    };

    return (
        <ScrollView contentContainerStyle = {styles.container}>
            {renderItems()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 35
    },
    button: {
        padding: 16,
        paddingHorizontal: 68,
        marginTop: 7,
        backgroundColor: "#016c32",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#1b86ee"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff"
    }
  });