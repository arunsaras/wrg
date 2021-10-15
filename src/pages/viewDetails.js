import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Textfield from '../components/textfield';
import {img} from '../constants/constants';

export default function ViewDetails({route}) {
  const data = route.params.post;
  var a = {...data.company};

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
        style={{
          marginTop: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 120, width: 120, borderRadius: 60}}
          source={
            data.profile_image == null ? img.imgDef : {uri: data.profile_image}
          }
        />
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 40,marginBottom:20}}>
        {data.name != null && <Textfield label={'Name'} value={data.name} />}
        {data.username != null && (
          <Textfield label={'User Name'} value={data.username} />
        )}
        {data.email != null && (
          <Textfield label={'Email Address'} value={data.email} />
        )}
        {data.phone != null && <Textfield label={'Phone'} value={data.phone} />}
        {data.website != null && (
          <Textfield label={'Website'} value={data.website} />
        )}
        {data.company != null && (
          <Text style={{fontSize: 20, marginTop: 20}}>Company Details:</Text>
        )}
        {data.company != null && <Textfield label={'Name'} value={a.name} />}
        {data.company != null && (
          <Textfield label={'Catch Phrase'} value={a.catchPhrase} />
        )}
        {data.company != null && <Textfield label={'BS'} value={a.bs} />}
      </View>
    </ScrollView>
  );
}
