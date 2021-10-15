import React from 'react';
import {View, Text} from 'react-native';

export default function Textfield(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', paddingHorizontal: 8, width: '40%'}}>
        <Text style={{fontSize: 17, color: 'black'}}>{props.label}</Text>

        <Text style={{fontSize: 17, color: 'black'}}> :</Text>
      </View>
      <View style={{width: '55%'}}>
        <Text style={{fontSize: 18, color: 'black'}}>{props.value}</Text>
      </View>
    </View>
  );
}
