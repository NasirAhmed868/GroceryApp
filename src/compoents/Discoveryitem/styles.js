import {color} from '@rneui/base';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width - 60;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageMenu: {
    width: scale(45),
    height: verticalScale(45),
    padding: moderateScale(1),
 
  },
  menuText: {
    width: scale(60),
    height: verticalScale(16),
    fontSize: moderateScale(13),
    marginLeft: scale(4),
  },
  menuBox: {
    width: scale(100),
    height: verticalScale(100),
    margin: 20,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: '#f7faf5',
  },
});

export default styles;
