// Box.js
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const CategoryListItem = ({item, onSelect}) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onSelect}>
      <View style={{margin: 10, alignItems: 'center'}}>
        <View style={{marginVertical: 10}}>
          <Image style={styles.image} source={item.profile_image} />
        </View>
      </View>
      <View style={{margin: 1, alignItems: 'center'}}>
        <Text style={styles.ItemName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListItem;
