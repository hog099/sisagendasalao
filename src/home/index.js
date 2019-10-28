import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from '../components/header/index';

export default function Home() {

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View>
                    <Text>Home Screen</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
