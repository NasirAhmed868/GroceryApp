import {React, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import Box from '../../compoents/Box';
import ItemBox from '../../compoents/itemBox';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';
const data = [
  {
    id: 1,
    product_name: 'Atta',
    product_image: require('../../atom/icon/aata.jpg'),
    quantity: '25kg quantity in package',
    Price: '50/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 2,
    product_name: 'Rice',
    product_image: require('../../atom/icon/rice.png'),

    Price: '120/kg',
    products: [
      {
        brandName: 'Aashirvaad Rice',
        name: 'shabarmati ',
        Price: '100/kg',
        quantity: '2kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Rice ',
        Price: '80/kg',
        quantity: '5kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 3,
    product_name: 'Oil',
    product_image: require('../../atom/icon/oil.png'),
    Price: '120/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 4,
    product_name: 'Dal',
    product_image: require('../../atom/icon/dal.png'),
    Price: '180/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 5,
    product_name: 'Vegtable',
    product_image: require('../../atom/icon/vegetable.jpg'),
    Price: '80/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 6,
    product_name: 'Milk',
    product_image: require('../../atom/icon/milk.jpg'),
    Price: '60/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 7,
    product_name: 'Dal',
    product_image: require('../../atom/icon/dal.png'),
    Price: '180/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 8,
    product_name: 'Vegtable',
    product_image: require('../../atom/icon/vegetable.jpg'),
    Price: '80/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
  {
    id: 9,
    product_name: 'Milk',
    product_image: require('../../atom/icon/milk.jpg'),
    Price: '60/kg',
    products: [
      {
        brandName: 'Aashirvaad Aata',
        name: 'shabarmati ',
        Price: '50/kg',
        quantity: '25kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
      {
        brandName: 'Aashirvaad Aata',
        name: 'Manna Atta ',
        Price: '80/kg',
        quantity: '50kg quantity in package',
        product_image: require('../../atom/icon/aata.jpg'),
      },
    ],
  },
];
const OnbordingScreen = ({item}) => {
  const [selectedKg, setSelectedKg] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState();
  const [inventory, setInventory] = useState([]);
  const handleItemSelect = itemName => {
    setSelectedItemName(itemName);
  };
  const navigateCategory = () => {
    navigation.navigate('Category', {inventory});
  };
  const handleAddItem = () => {
    if (selectedItemName) {
      console.log('selectedName', selectedItemName);
      console.log('ventry', inventory);
      setInventory(inventory => [...inventory, selectedItemName]);
      setSelectedItemName(null);
    }
  };

  const totalItemsInInventory = inventory?.length;
  const navigation = useNavigation();
  console.log('tttttttt', inventory);
  console.log('fffff', setInventory);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.createdText}>Created Your inventory</Text>
      </View>
      <View style={{width: scale(400), height: verticalScale(250)}}>
        <ImageBackground
          style={styles.backImage}
          source={require('../../atom/icon/thank.jpg')}>
          <View style={{marginLeft: 25}}>
            <TextInput
              style={styles.itemName}
              placeholder="Selected Item Name"
              value={selectedItemName?.product_name}
              onChangeText={text => setSelectedItemName(text)}
            />

            <Picker
              selectedValue={selectedKg}
              style={styles.itemName}
              onValueChange={itemValue => setSelectedKg(itemValue)}>
              {[...Array(20)].map((_, index) => (
                <Picker.Item
                  key={index + 1}
                  label={`${index + 1} kg`}
                  value={index + 1}
                />
              ))}
            </Picker>
          </View>
          <Text style={styles.quantityText}>{`kg`}</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.btnText}>Add item to Inventory</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={styles.itemCategory}>
          <Text style={styles.chooseText}>Choose by categories</Text>

          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <ItemBox
                item={item}
                index={index}
                style={{marginVertical: 10}}
                onSelect={() => handleItemSelect(item)}
              />
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
          />
        </View>
      </ScrollView>
      <View style={styles.contianerInventory}>
        <Text style={styles.inventoryItemCount}>Total items: </Text>
        <Text style={styles.totalItem}> {totalItemsInInventory} </Text>
        <Text style={styles.inventoryTitle}> View Inventory</Text>

        <TouchableOpacity
          style={styles.downArrowContainer}
          onPress={() => navigateCategory()}>
          <Image
            style={styles.downArrow}
            source={require('../../atom/icon/downArrow.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnbordingScreen;
