import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function ServicesIndex() {

    const [datalist, setdatalist] = useState([
        {
            name: 'Corte Feminino',
            price: '30,00',
        },
        {
            name: 'Hidratação',
            price: '80,00',
        },
        {
            name: 'Design de Sombrancelha',
            price: '20,00',
        },
        {
            name: 'Selante/Progessiva',
            price: '80,00',
        },
        {
            name: 'Relaxamento',
            price: '220,00',
        },
        {
            name: 'Coloração',
            price: '45,00',
        },
        {
            name: 'Pigmentação Cílios',
            price: '35,00',
        },
        {
            name: 'Sombrancelha Henna',
            price: '30,00',
        },
    ])

return (
    <>
    <View style={styles.container}>
    <Text style={styles.ServicesTitle}>Serviços</Text>

    {/* <SafeAreaView style={styles.ContainerFlatList}>

    <FlatList
data={datalist}
renderItem={({ item }) => {
return (
    <TouchableOpacity style={styles.ServicesCardItem}>
    <View style={styles.ContainerTitleItemService}>
        <Text style={styles.TitleItemService}>{item.name}</Text>
    </View>
    <View style={styles.ContainerPriceItemService}>
        <Text style={styles.PriceItemService}>R$ {item.price}</Text>
    </View>
</TouchableOpacity>
)
}}
keyExtractor={item => item.id}
/>
</SafeAreaView> */}


    <SafeAreaView style={styles.ContainerFlatList}>
        <ScrollView>
    
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Corte Feminino</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 30,00</Text>
        </View>
    </View>
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Hidratação</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 80,00</Text>
        </View>
    </View>
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Design de Sombrancelha</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 20,00</Text>
        </View>
    </View>
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Selante/Progessiva</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 80,00</Text>
        </View>
    </View>
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Relaxamento</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 220,00</Text>
        </View>
    </View>
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Coloração</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 45,00</Text>
        </View>
    </View>
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Pigmentação Cílios</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 35,00</Text>
        </View>
    </View>
    <View style={styles.ServicesCardItem}>
        <View style={styles.ContainerTitleItemService}>
            <Text style={styles.TitleItemService}>Sombrancelha Henna</Text>
        </View>
        <View style={styles.ContainerPriceItemService}>
            <Text style={styles.PriceItemService}>R$ 30,00</Text>
        </View>
    </View>

    </ScrollView> 
    </SafeAreaView> 
    </>
)


                
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignContent: 'stretch',
        // justifyContent: 'center',        
        // alignContent: 'stretch',
    },
    ContainerFlatList: {
        height: 400,
    },
    ServicesTitle: {
        fontSize: 25,
        padding: 3,
        marginBottom: 3,
    },
    ServicesCardItem: {
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        flexDirection: "row",
        fontSize: 10,
        height: 60,
        margin: 3,
        marginRight: 8,
        marginLeft: 8,
        elevation: 6,
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.19,
        shadowRadius: 2,
    },
    ContainerTitleItemService: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 5,
    },
    TitleItemService: {
        fontSize: 16,
        alignItems: 'flex-start',
    },
    ContainerPriceItemService: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 5,
    },
    PriceItemService: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'flex-end',
    },
    FooterSpace: {
        height: 60,
    }
});
