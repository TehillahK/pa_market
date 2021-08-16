import React from "react";
import {View, Text, Image,StyleSheet} from "react-native";
import { Title,Headline,Avatar, Card, IconButton  } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const Crop = (props) => {
    return(
        <View style={styles.container}>
            <Card.Title
                title={props.title}
                subtitle={props.description}
                left={() => <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: props.photoUrl,
                    }}
                />}
            />
        </View>
    )
}

export default Crop
Crop.defaultProps = {
    title: 'Vegetable',
    description:'Organically grown with no GMO',
    deliveryTimes: '20-30',
    photoUrl: 'https://picsum.photos/700',
};

