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
    SafeAreaView
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CropList from "../components/cropList";
import * as Animatable from 'react-native-animatable';
import { Header} from "react-native/Libraries/NewAppScreen";
import HeaderImageScrollView,{ TriggeringView } from 'react-native-image-header-scroll-view';
import {StatusBar} from "expo-status-bar";


const FarmScreen = (props) => {
    return(

        <CropList />

    )
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
});
FarmScreen.defaultProps = {

    photoUrl: 'https://picsum.photos/700',
};
export default FarmScreen;
