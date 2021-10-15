import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Data, img} from '../constants/constants';

const List = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const [search, setS] = React.useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://www.mocky.io/v2/5d565297300000680030a986', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(Response => Response.json())
      .then(ResponseJson => {
        setData(ResponseJson);
      })
      .catch(error => {
        throw error;
      });
  };
  const Search = () => {
    if (search) {
      const newData = Data.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
    } else {
      setData(Data);
      setS('');
    }
  };

  const ListEmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          marginTop: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{height: 105, width: 105}} source={img.imgEmp} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{width: '100%', padding: 20}}>
        <TextInput
          value={search}
          onSubmitEditing={() => Search()}
          returnKeyLabel="search"
          placeholder="search"
          onChangeText={text => {
            setS(text);
          }}
          style={{
            padding: 0,
            width: '100%',
            borderRadius: 20,
            backgroundColor: '#d2d2d2',
            paddingHorizontal: 20,
            fontSize: 20,
            height: 45,
          }}
        />
      </View>
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        style={{flex: 1}}
        data={data}
        renderItem={({item}) => {
          let a = {...item.company};
          console.log('data', a.name);

          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('View Details', {post: item, aValue: a})
              }
              activeOpacity={0.8}
              style={{flexDirection: 'row', width: '100%', padding: 6}}>
              <View style={{}}>
                <Image
                  style={{height: 60, width: 60, borderRadius: 30}}
                  source={
                    item.profile_image == null
                      ? img.imgDef
                      : {uri: item.profile_image}
                  }
                />
              </View>
              <View style={{marginLeft: 8}}>
                <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>

                <Text style={{fontSize: 18, color: 'black'}}>{a.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default List;
