import React, {useRef} from 'react';
import {
    StyleSheet,
    View,
    Pressable,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
    SafeAreaView, Platform
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CropList from "../components/cropList";


import * as Animatable from 'react-native-animatable';
import { Header} from "react-native/Libraries/NewAppScreen";
import HeaderImageScrollView, {ImageHeaderScrollView, TriggeringView} from 'react-native-image-header-scroll-view';
import {StatusBar} from "expo-status-bar";
import Icon from "react-native-vector-icons";
import FarmHeader from "../components/farmHeader";
import * as navTitleView from "react-native";

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const FarmScreen = (props) => {
    let headerChildren = <Text>Hello, World!</Text>;
    return(
        <ImageHeaderScrollView
            maxHeight={MAX_HEIGHT}
            minHeight={MIN_HEIGHT}
            maxOverlayOpacity={0.1}
            minOverlayOpacity={0.0}
            renderHeader={() => <Image source={{uri:props.photoUrl}} style={{ height: MAX_HEIGHT, width: Dimensions.get('window').width }} />}
            renderForeground={() => (
                <View style={styles.cover} >
                    <TouchableOpacity onPress={() => console.log("tap!!")}>
                        <Text style={{ fontSize:36, backgroundColor: "transparent"  ,fontWeight: 'bold'}}>Farm Name</Text>
                    </TouchableOpacity>
                </View>
            )}
        >
            <View style={{ height: 1000 }}>
                <TriggeringView >
                   <CropList />
                </TriggeringView>
            </View>
        </ImageHeaderScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    cover:{
        height: MAX_HEIGHT,
        justifyContent: "flex-end",
        alignItems:"flex-start",
        fontSize:36
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

FarmScreen.defaultProps = {

    photoUrl: 'https://picsum.photos/700',
};
export default FarmScreen;
