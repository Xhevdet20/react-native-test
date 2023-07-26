import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './JobsiteCard.styles';

interface Props {
  data: {
    id : string,
    title: string,
    status: string,
    color : string
  };
  index: number
}

function JobSiteCard(props: Props): JSX.Element {
  return (
    <View style={styles.container} key={props.index}>
      <Text style={{textAlign: 'center', flex : 1}}>{props.data.id}</Text>
      <TouchableOpacity onPress={() => {console.log("clicked")}} style={{flex: 7, marginTop : 5}}>
        <Text style={{ color: 'rgba(18, 100, 163, 1)',  textAlign : 'left', flex: 3 }}>{props.data.title}</Text>
      </TouchableOpacity>
      <View style={{...styles.new, backgroundColor : props.data.color}}>
        <Text style={{textAlign: 'center', color: 'white'}}> {props.data.status} </Text>
      </View>
    </View>
  );
}

export default JobSiteCard;
