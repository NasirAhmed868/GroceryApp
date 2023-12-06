// Box.js
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const CategoryListItem = ({item, onSelect}) => {
  return (
    <View style={styles.square} onPress={onSelect}>
      <View style={{margin: moderateScale(10), alignItems: 'center'}}>
        <View style={{marginVertical: verticalScale(10)}}>
          <Image style={styles.image} source={item.profile_image} />
        </View>
      </View>

      <View
        style={{
          margin: moderateScale(1),
          marginTop: verticalScale(10),
        }}>
        <Text style={styles.ItemName}>{item.name}</Text>
        <Text style={styles.brandName}>{item.brandName}</Text>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',

          marginTop: verticalScale(10),
        }}>
        <Image
          style={{
            width: scale(15),
            height: verticalScale(15),
            marginLeft: scale(5),
          }}
          source={require('../../atom/icon/rs_icns.png')}></Image>
        <Text style={styles.brandName}>{item.Price}</Text>
        <TouchableOpacity>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryListItem;
