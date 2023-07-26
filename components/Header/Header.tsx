import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Header.styles';
import SearchBar from 'react-native-search-bar';

interface Props {
  //   navigation: NavigationProp<ParamListBase>;
  handleSearch: (text: string) => void;
  searchText: string
}

function Header(props: Props): JSX.Element {

  return (
    <View style={styles.container}>
      <Icon name={'navicon'} size={30} color="black" style={{...styles.icon}} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search ..."
          placeholderTextColor="rgba(35, 31, 32, 0.5)"
          style={styles.input}
          onChangeText={props.handleSearch} 
          value={props.searchText} 
        />
        <Icon
          name="search"
          size={20}
          color="rgba(30, 52, 69, 0.1)"
          style={styles.icon}
        />
      </View>
      
      <Icon name="bell" size={20} color="black" style={styles.icon} />
      <Image
        source={require('../../assets/profile.png')}
        style={styles.profileIcon}
      />
    </View>
   
  );
}

export default Header;
