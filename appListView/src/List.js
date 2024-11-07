import React, {useState} from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";

export default function List(){
    const names = [
        {id: 0, nome: 'Iru'},
        {id: 1, nome: "Claudio"},
        {id: 2, nome: "Schneider"},
        {id: 2, nome: "Igor"},
        {id: 3, nome: "Edson"},
        {id: 4, nome: "Daniel"},
        {id: 5, nome: "Davi"},
        {id: 6, nome: "Miguel"},
        {id: 7, nome: "Henry"},
        {id: 8, nome: "Joao vitor"}
    ]

    const alertItemName = (item) => {
        alert("Voce clicou em \n" + item.nome);
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
        marginTop: 3,
        backgroundColor: "#9f9fb1",
        alignItems: "center",
        borderBottomWidth: 7,
        borderBottomColor: "#690009"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#690009"
    }
  });