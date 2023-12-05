import {React} from 'react-';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const DiscoverdItem = ({item, ahmed}) => {
  const navigation = useNavigation();
  const onbuttonPrees = () => {
    console.log('onbuttonPrees', item);
    let routName = '';
    if (item.id == 1) routName = 'OnbordingScreen';
    if (item.id == 2) routName = '';
    if (item.id == 3) routName = '';
    if (item.id == 4) routName = '';

    navigation.navigate(routName);
  };
  console.log(item);
  return (
    <TouchableOpacity
      onPress={() => onbuttonPrees()}
      style={{marginHorizontal: ahmed % 2 == 0 ? 15 : 0}}>
      <View style={styles.menuBox}>
        <View style={{margin: 10}}>
          <Image style={styles.imageMenu} source={item.product_image}></Image>
        </View>
        <View style={{marginHorizontal: ahmed % 5 == 0 ? 15 : 0}}>
          <Text style={styles.menuText}> {item.product_name} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default DiscoverdItem;
