import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './InfoCardList.styles';

interface Props {
  //   navigation: NavigationProp<ParamListBase>;
}

function InfoCardLst(props: Props): JSX.Element {
  let info = [
    {
      title: '14 On Road',
      icon: 'truck',
      color: '#F6CB52',
    },
    {
      title: '2 Completed',
      icon: 'truck',
      color: '#7AC14D',
    },
    {
      title: '14 On hold',
      icon: 'truck',
      color: '#E9C466',
    },
  ];

  return (
    <View>
      {info.map((info, index) => (
        <View
          style={{...styles.infoCard, backgroundColor: info.color}}
          key={index}>
          <Text style={styles.text}>{info.title}</Text>
          <Icon
            name={info.icon}
            size={30}
            color="rgba(30, 52, 69, 0.1)"
            style={{...styles.icon,color: 'white'}}
          />
        </View>
      ))}
    </View>
  );
}

export default InfoCardLst;
