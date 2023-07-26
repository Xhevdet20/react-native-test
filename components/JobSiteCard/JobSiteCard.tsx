import {Link, NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './JobsiteCard.styles';

interface Props {
  //   navigation: NavigationProp<ParamListBase>;
  data: string[];
}

function JobSiteCard(props: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{props.data[0]}</Text>
      <Button mode="text">{props.data[1]}</Button>
      <View style={styles.new}>
        <Text style={{textAlign: 'center', color: 'white'}}> New </Text>
      </View>
    </View>
  );
}

export default JobSiteCard;
