import React from "react";

import { Title,Headline } from 'react-native-paper';
import FarmCard from "./farmCard";

import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, SectionList} from 'react-native';
import Crop from "./crop";

const DATA = [
    {
        title: "Vegetables",
        data: ["Brocli", "Lettuce", "Onion"]
    },
    {
        title: "Meat",
        data: ["Beef", "Mutton", "Chicken"]
    },
    {
        title: "Meat Products",
        data: ["Milk", "Eggs", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];
const Item = ({ title }) => (
    <View >
        <Crop title={title}/>
    </View>
);


const CropList = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff'
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        marginBottom:10,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24
    }
});

export default CropList
CropList.defaultProps = {
    title: 'Vegetables',
    deliveryTimes: '20-30',
    photoUrl: 'https://picsum.photos/700',
};
