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
  new: {
    backgroundColor : '#EE8A35',
    alignItems : 'center',
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
  },
  header : {
    display : 'flex',
    flexDirection: 'row'
  }
});
export default styles;
