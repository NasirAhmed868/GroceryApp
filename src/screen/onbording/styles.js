import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width - 60;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    width: scale(420),
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
  createdText: {
    marginLeft: scale(50),
    marginTop: verticalScale(40),
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: 'black',
  },
  backImage: {
    width: scale(420),
    height: verticalScale(300),
  },
  itemName: {
    width: scale(300),
    height: verticalScale(50),
    color: 'black',
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: 'white',
    marginTop: verticalScale(30),
  },
  addButton: {
    backgroundColor: 'yellow',
    borderRadius: 5,
    width: scale(300),
    height: verticalScale(50),
    marginLeft: 25,
  },
  btnText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(15),
    color: 'black',
  },
  itemCategory: {
    width: scale(350),
    height: verticalScale(400),
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.7,
    elevation: 5,
    backgroundColor: 'white',
  },
  chooseText: {
    marginLeft: scale(50),
    marginTop: verticalScale(20),
    marginBottom: scale(10),
    fontSize: moderateScale(18),
    fontWeight: '800',
    color: 'black',
  },
  contianerInventory: {
    backgroundColor: 'yellow',
    borderRadius: 5,
    width: scale(350),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  square: {
    width: scale(20),
    height: verticalScale(20),
    borderWidth: scale(2),
    backgroundColor: 'red',
  },
  inventory: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    marginLeft: scale(180),
  },
  inventoryBox: {
    marginTop: verticalScale(20),
    padding: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: 'gray',
    borderRadius: moderateScale(8),
  },
  inventoryTitle: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    justifyContent: 'center',
    marginLeft: scale(90),
    color: 'black',
  },
  inventoryItemCount: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(10),
    color: 'black',
  },
  inventoryItem: {
    fontSize: moderateScale(14),
    marginBottom: scale(5),
    color: 'black',
  },
  downArrowContainer: {
    alignItems: 'center',
  },
  downArrow: {
    width: scale(25),
    height: verticalScale(25),
  },
  totalItem: {
    width: scale(20),
    height: verticalScale(20),
    borderWidth: scale(2),
    fontWeight: '400',
  },
});

export default styles;
