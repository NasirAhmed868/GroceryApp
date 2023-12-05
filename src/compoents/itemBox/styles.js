import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: moderateScale(8),
    marginHorizontal: scale(9),
    marginVertical: verticalScale(5),
    width: scale(100),
    height: verticalScale(100),
  },
  image: {
    width: scale(40),
    height: verticalScale(40),
    resizeMode: 'cover',
  },
  ItemName: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});

export default styles;
