import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
const CategoryIcon = props => {
  return (
    <View style={styles.container}>
      <IconButton
        icon="camera"
        color={Colors.red500}
        size={20}
        onPress={() => console.log('Pressed')}
        style={styles.icon}
      />
      <Text>{props.name}</Text>
    </View>
  );
};
CategoryIcon.defaultProps = {
  name: 'Vegetables',
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 25,
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    display: 'flex',

  },
});
export default CategoryIcon;
