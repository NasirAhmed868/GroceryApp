// Box.js
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CategoryBox from '../categoryBox';
import styles from './styles';

const Box = ({item, index, clickindex, onListItemClick, inventory}) => {
  console.log('item', inventory);
  return (
    <View style={[styles.square]}>
      <TouchableOpacity onPress={() => onListItemClick(index)}>
        <View style={{margin: 5}}>
          <View style={{marginVertical: 1}}>
            <Image style={styles.image} source={item.product_image} />
          </View>
        </View>
        <View style={{marginVertical: 1}}>
          <Text style={styles.ItemName}> {item.product_name} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Box;
