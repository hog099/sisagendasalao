import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from '../components/header/index';

export default function Home() {

    return (
        <>
            <Header />
            <View style={styles.BannerSpon}>
                <Text style={styles.BannerSponText}>Salão Laila e Leila</Text>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#f5f5f5",
    },
    BannerSpon: {
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 109,
        opacity: 1,
        margin: 0,
        backgroundColor: "#1ABC9C",
    },
    BannerSponText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    }
});
