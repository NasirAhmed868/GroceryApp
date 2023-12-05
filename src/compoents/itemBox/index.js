// Box.js
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const ItemBox = ({item, onSelect}) => {
  const navigation = useNavigation();
  const onbuttonPrees = () => {
    console.log('onbuttonPrees', item);
    let routName = '';
    if (item.id == 1) routName = 'Category';
    if (item.id == 2) routName = 'Category';
    if (item.id == 3) routName = 'Category';
    if (item.id == 4) routName = 'Category';

    navigation.navigate(routName);
  };
  return (
    <TouchableOpacity style={styles.square} onPress={onSelect}>
      <View style={{margin: 10, alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Image style={styles.image} source={item.product_image} />
        </View>
      </View>
      <View style={{margin: 1, alignItems: 'center'}}>
        <Text style={styles.ItemName}>{item.product_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemBox;
