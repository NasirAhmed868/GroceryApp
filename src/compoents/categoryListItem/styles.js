import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  square: {
    borderWidth: moderateScale(1),
    borderColor: 'gray',
    borderRadius: moderateScale(3),
    marginHorizontal: scale(2),
    marginVertical: verticalScale(2),
    height: verticalScale(200),
    width: scale(108),
    backgroundColor: 'white',
  },
  image: {
    width: scale(45),
    height: verticalScale(45),
    resizeMode: 'cover',
  },
  ItemName: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: 'black',
  },
  brandName: {
    fontSize: moderateScale(12),
    color: 'black',
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: moderateScale(10),
    marginTop: verticalScale(10),
    color: 'black',
    fontWeight: 'bold',
  },
  add: {
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 1,
    backgroundColor: 'white',
    fontSize: moderateScale(15),
    color: 'green',
    borderColor: 'black',
    borderWidth: 0.5,
    marginRight: scale(10),
    marginLeft: scale(20),
    fontWeight: 'bold',
  },
});

export default styles;
