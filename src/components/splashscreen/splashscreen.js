import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import logo from '../../../assets/logo.jpeg';

export default function Splahscreen() {

    return (
        <View style={styles.container}>
            <Image
                source={logo}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.text8}>Salão Laila e Leila</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#000"
        height: '100%',
        backgroundColor: "rgba(52,73,94,1)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: "#000000",
        borderWidth: 0,
        marginTop: 0,
        // marginLeft: 98
    },
    text8: {
        color: "rgba(245,245,245,1)",
        fontSize: 35,
        // fontFamily: "roboto-700",
        marginTop: 21,
        // marginLeft: 61
    },
    text7: {
        color: "rgba(245,245,245,1)",
        fontSize: 35,
        // fontFamily: "roboto-700",
        marginTop: 62,
        marginLeft: 61
    }
});
