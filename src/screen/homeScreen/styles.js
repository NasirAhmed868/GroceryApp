import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const windowWidth = Dimensions.get('window').width - 60;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: scale(350),
    height: verticalScale(100),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: '#eb9534',
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: scale(25),
    height: verticalScale(25),
    resizeMode: 'cover',
  },
  account: {
    width: scale(25),
    height: verticalScale(25),
    resizeMode: 'cover',
  },
  primium: {
    width: scale(350),
    height: verticalScale(150),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: '#fafbfc',
    borderWidth: moderateScale(10),
    borderColor: 'red',
  },
  basketImage: {
    width: scale(330),
    height: verticalScale(130),
  },
  itemDisCovered: {
    width: scale(350),
    height: verticalScale(50),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: '#fafbfc',
    borderTopLeftRadius: moderateScale(5),
    borderTopRightRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIcon: {
    width: scale(30),
    height: verticalScale(25),
    marginLeft: scale(30),

    marginRight: verticalScale(10),
  },
  nextOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: 'gray',
    margin: moderateScale(10),
    width: scale(335),
    height: verticalScale(100),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: '#fafbfc',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    width: scale(100),
  },
  scheduledText: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    width: scale(150),
    height: verticalScale(18),
  },
  datestyle: {
    fontSize: moderateScale(14),
    color: 'blue',
  },
  monday: {
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  additionalInfo: {
    flexDirection: 'row',
    flex: 2,
    marginLeft: scale(20),
  },
  additionalText: {
    fontSize: moderateScale(14),
    color: 'green',
  },
  viewBoxMonday: {
    height: verticalScale(20),
    width: scale(100),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 3,
  },
});

export default styles;
