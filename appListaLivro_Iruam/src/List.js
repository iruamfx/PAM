import React, {useState} from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";

export default function List(){
    const names = [
        {id: 0, nome: 'Dracula', author: "Bram Stoker"},
        {id: 1, nome: "Call of Cthulhu", author: "H.P Lovecraft"},
        {id: 2, nome: "The Electric State", author: "Simon Stalenhag"},
        {id: 2, nome: "Things From the Flood", author: "Simon Stalenhag"},
        {id: 3, nome: "Tales From The Flood", author: "Simon Stalenhag"},
        {id: 4, nome: "1984", author: "George Orwell"},
        {id: 5, nome: "Admiravel Mundo Novo", author: "Aldous Huxley"},
        {id: 6, nome: "A Song of Ice and Fire", author: "George R. R. Martin"},
        {id: 7, nome: "Fogo & Sangue", author: "George R. R. Martin"}
    ]

    const alertItemName = (item) => {
        alert("Nome: " + item.nome + "\nAutor: " + item.author);
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
        paddingHorizontal: 48,
        marginTop: 7,
        backgroundColor: "#e47911",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#1b86ee"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111111"
    }
  });