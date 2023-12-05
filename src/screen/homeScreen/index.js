import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import Menu from '../../compoents/categoryBox';
import DiscoverdItem from '../../compoents/Discoveryitem';

import styles from './styles';
const menu = [
  {
    id: 1,
    product_name: 'Inventory',
    product_image: require('../../atom/icon/inventor.jpg'),
  },
  {
    id: 2,
    product_name: 'Discovery',
    product_image: require('../../atom/icon/discovery.jpg'),
  },
  {
    id: 3,
    product_name: 'Digi Menu',
    product_image: require('../../atom/icon/menuDigi.jpg'),
  },
  {
    id: 4,
    product_name: 'Marketing',
    product_image: require('../../atom/icon/marketing.png'),
  },
];
const HomeScreen = () => {
  navigateToDetails = itemId => {
    const {navigation} = this.props;
    navigation.navigate('', {itemId});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerImage}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../atom/icon/menu.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.account}
              source={require('../../atom/icon/account.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.nextOrder}>
        <View style={styles.textContainer}>
          <Text style={styles.scheduledText}>Next Order Scheduled </Text>
          <View style={styles.viewBoxMonday}>
            <Text style={styles.datestyle}>31 Nov 2023</Text>
          </View>
          <Text style={styles.monday}>10:30 | Monday</Text>
        </View>
        <View style={styles.additionalInfo}>
          <Image
            style={{
              width: 20,
              height: verticalScale(90),
              marginLeft: scale(20),
            }}
            source={require('../../atom/icon/vertical_line.png')}
          />
          <Image
            style={{
              width: scale(150),
              height: verticalScale(90),
              marginLeft: scale(10),
        
            }}
            source={require('../../atom/icon/basket-image.jpg')}></Image>
        </View>
      </View>
      <View style={styles.primium}>
        <Image
          style={styles.basketImage}
          source={require('../../atom/icon/aata.jpg')}></Image>
      </View>
      <View>
        <FlatList
          data={menu}
          renderItem={({item, index}) => (
            <DiscoverdItem item={item} index={index} />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
      <View style={styles.itemDisCovered}>
        <TouchableOpacity>
          <Image
            style={styles.homeIcon}
            source={require('../../atom/icon/home_icon.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.homeIcon}
            source={require('../../atom/icon/shoping_icon.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.homeIcon}
            source={require('../../atom/icon/bell_icons.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.homeIcon}
            source={require('../../atom/icon/account_icon.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
