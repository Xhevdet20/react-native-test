import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tableHeaderText: {
    fontWeight: 'bold',
  },
  tableHeader: {
    height: 40,
    backgroundColor: '#f1f8ff',
    borderBottomWidth : 1,
    borderColor : "#B2B2B2"
  },
  tableRow: {
    height: 40,
    borderBottomWidth : 1,
    borderColor : "#B2B2B2"
  },
  tableRowText: {
    // textAlign: 'center',
  },
  new: {
    backgroundColor : '#EE8A35',
    // marginRight : 15,
    alignItems : 'center',
    // borderRadius : 2
  },
  underJudgement : {
    backgroundColor : '#B3D99B',
  },
  open : {
    backgroundColor : '#E9C466'
  },
  closed : {
    backgroundColor : '#7AC14D'
  },
  tableContainer : {
    margin : 10
  }
});
export default styles;
