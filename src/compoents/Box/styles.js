// styles.js
import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  square: {
    borderWidth: scale(1),
    borderColor: 'green',
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    marginHorizontal: verticalScale(10),
    width: scale(90),
    height: verticalScale(100),
    marginTop: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: scale(50),
    height: verticalScale(50),
    resizeMode: 'cover',
  },
  ItemName: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
