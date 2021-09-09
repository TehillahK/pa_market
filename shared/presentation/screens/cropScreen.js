import React from "react";
import {ImageBackground, View, StyleSheet, Image} from "react-native";

function CropImage() {
    return(
        <View>
            <Image source={{uri:'https://picsum.photos/700'}} resizeMode="cover" style={styles.image} />
        </View>
    )
}
const CropScreen = () => {
  return (
      <View>
            <CropImage />
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});
export default CropScreen;
