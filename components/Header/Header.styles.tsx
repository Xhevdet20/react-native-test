import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around',
    padding : 20
  },
  icon: {
    paddingRight: 20,
    // color : 'black'
  },
  input: {
    width: '40%',
    borderRadius: 5,
    marginTop: '5%',
    padding: 5,
    color: 'black',
    maxWidth : '100%'
  },
  inputContainer: {
    backgroundColor: '#F5F5F7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon : {
    height: 41,
    width: 41
  }
});
export default styles;
