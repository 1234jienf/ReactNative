import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {deviceHeight, deviceWidth} from '../components/Dimensions';
import Cards from './Cards';

export default function SearchScreen(props) {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: '한양대',
      image: require('../assets/판교.jpg'),
    },
    {
      name: '을지로3가',
      image: require('../assets/을지로3가역_동쪽_상가거리_(5).jpg'),
    },
    {
      name: '한양대',
      image: require('../assets/hanyang-university-building-copy.jpg'),
    },
    {
      name: '건대입구역',
      image: require('../assets/06F00510Dc30000.jpg'),
    },
    {
      name: 'DDP',
      image: require('../assets/seoul-6561393_1280.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../assets/image7.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.3, backgroundColor: 'black'}}
      />
      <View style={{position: 'absolute'}}>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="dehaze" size={46} color="black" />
          <Image
            source={require('../assets/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <Text style={{fontSize: 30, color: 'black'}}>안녕하세요!</Text>
          <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'black',
              marginTop: 10,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="black"
              style={{paddingHorizontal: 10, color: 'black'}}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              paddingHorizontal: 10,
              marginTop: 120,
              marginBottom: 20,
            }}>
            자주 가는 지역
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}
