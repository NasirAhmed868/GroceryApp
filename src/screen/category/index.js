// Category.js
import {useNavigation} from '@react-navigation/native';
import {React, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import Box from '../../compoents/Box';
import CategoryListItem from '../../compoents/categoryListItem';
import styles from './styles';
const subCategory = {
  1: [
    {
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in package',
      profile_image: require('../../atom/icon/aata.jpg'),
    },
    {
      brandName: 'Aashirvaad Aata',
      name: 'Manna Atta ',
      Price: '80/kg',
      quantity: '50kg quantity in package',
      profile_image: require('../../atom/icon/aata.jpg'),
    },
  ],
  2: [
    {
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in package',
      profile_image: require('../../atom/icon/aata.jpg'),
    },
    {
      brandName: 'Aashirvaad Aata',
      name: 'Manna Atta ',
      Price: '80/kg',
      quantity: '50kg quantity in package',
      profile_image: require('../../atom/icon/aata.jpg'),
    },
  ],
};

const Category = ({route}) => {
  const [clickindex, setclickindex] = useState(1);

  const navigation = useNavigation();
  const selectedItems = route.params.inventory;
  console.log('gggg', selectedItems);

  console.log('sub  bbbb', subCategory);
  console.log('click', clickindex);
  console.log('subClick', subCategory[clickindex]);
  const onListItemClick = index => {
    setclickindex(selectedItems[index].id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnbordingScreen')}>
            <Image
              style={styles.arrowImage}
              source={require('../../atom/icon/left_arrow.png')}
            />
          </TouchableOpacity>
          <View style={styles.square} />
          <Text style={styles.Category}>Category</Text>

          <TouchableOpacity>
            <Image
              style={styles.downArrow}
              source={require('../../atom/icon/downArrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                // Add any onChangeText or onSubmitEditing props as needed
              />
              <TouchableOpacity>
                <Image
                  source={require('../../atom/icon/search-img.png')}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={[styles.column]}>
          <FlatList
            // style={styles.scrollView}
            data={selectedItems}
            renderItem={({item, index}) => (
              <Box
                item={item}
                index={index}
                style={{marginVertical: 10}}
                clickindex={clickindex}
                onListItemClick={index => onListItemClick(index)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={[{flex: 2}]}>
          <FlatList
            data={subCategory[clickindex]}
            renderItem={({item, index}) => (
              <CategoryListItem
                item={item}
                index={index}
                style={{marginVertical: 10}}
                onSelect={() => handleItemSelect(item)}
              />
            )}
            keyExtractor={item => item.name.toString()}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
};

export default Category;
