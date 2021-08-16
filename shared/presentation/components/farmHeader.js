import React ,{useRef} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import Animated from "react-native-reanimated";
import {Colors} from "react-native/Libraries/NewAppScreen";
const FarmHeader = () => {
    const scrollA = useRef(new Animated.Value(0)).current;

    return(
     <SafeAreaView style={styles.scrollView}>
        <Animated.View
            style={styles.header}
        >
            <View>
                <Text>Farm</Text>
            </View>

        </Animated.View>
         <Animated.ScrollView
            showVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={5}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollA}}}],
                {useNativeDriver: true},
            )}
         >


         </Animated.ScrollView>
     </SafeAreaView>
 )
}
const styles = StyleSheet.create({
    scrollView: {
        flex:1,
        backgroundColor: Colors.lighter,
    },
    header:{
        flexDirection:'row',
        justifyContent:'center',
        padding:16
    }
});
export default FarmHeader;
