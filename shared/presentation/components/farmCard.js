import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    margin: 15,
    borderRadius: 15,
  },
});
const FarmCard = props => {
  return (
    <Pressable>
      <Card style={styles.container}>
        <Card.Cover source={{uri: props.photoUrl}} />
        <Card.Content>
          <Title>{props.name}</Title>
          <Paragraph>{props.deliveryTimes} min Delivery fee: K25</Paragraph>
        </Card.Content>
      </Card>
    </Pressable>
  );
};
FarmCard.defaultProps = {
  name: 'Farm name',
  deliveryTimes: '20-30',
  photoUrl: 'https://picsum.photos/700',
};
export default FarmCard;
