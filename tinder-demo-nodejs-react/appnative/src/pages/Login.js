import React from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import logo from '../assets/logo.png'

export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={logo}/>

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Insert you Github user"
                placeholderTextColor="#999"
                style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
  
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4724',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
  });