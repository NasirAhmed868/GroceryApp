import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width - 60;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowImage: {
    width: scale(20),
    height: verticalScale(20),
    marginTop: verticalScale(20),
    marginLeft: scale(20),
  },
  header: {
    width: '100%',
    height: verticalScale(80),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: 'white',
  },
  square: {
    width: scale(20),
    height: verticalScale(20),
    marginLeft: scale(10),
    marginTop: verticalScale(20),
    borderWidth: moderateScale(2),
  },
  containerHeader: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
  },
  Category: {
    fontSize: moderateScale(18),
    marginTop: verticalScale(20),
    marginLeft: scale(10),
    color: 'black',
    
  },
  searchView: {
    width: scale(40),
    height: verticalScale(40),
    radius: moderateScale(20),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(25),
    marginTop: verticalScale(20),
    marginLeft: scale(50),
  },
  search: {
    width: scale(20),
    height: verticalScale(20),
    marginTop: verticalScale(20),
    marginLeft: scale(50),
  },
  downArrow: {
    width: scale(15),
    height: verticalScale(15),
    marginTop: verticalScale(20),
    marginLeft: scale(10),
  },
  scrollView: {
    width: scale(100),
    height: verticalScale(700),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: 'white',
  },

  viewBox: {
    width: scale(220),
    height: verticalScale(700),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: 'white',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    padding: moderateScale(5),
    borderWidth: moderateScale(1),
    borderRightWidth: moderateScale(1),
    borderRightColor: 'black',
    flex: 1,
  },
  searchContainer: {
    width: scale(130),
    height: verticalScale(40),
    marginTop: verticalScale(25),
    marginLeft: scale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: scale(15),
    height: verticalScale(15),
  },
  searchBar: {
    fontSize: moderateScale(16),
  },
});

export default styles;
