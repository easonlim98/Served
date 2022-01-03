import React, { Component, useReducer, useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
  Alert,
  Modal,
  Dimensions,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Colors from "../constant/Colors";
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = props => {

const { navigation, route } = props;

const [categoryList, setCategoryList] = useState([
  {
    name: 'Mobile',
    image: 'https://blog.malwarebytes.com/wp-content/uploads/2015/05/photodune-9089398-mobile-devices-s-900x506.jpg'
  }, 
  {
    name: 'Vechicle',
    image: 'https://blueflag.com.au/static/3642cc73b5c4a9ceb5fa176c5f5506af/4dad2/vehicle-make.jpg'
  },
  {
    name: 'Construction',
    image: 'https://www.crossthet.com.au/wp-content/uploads/2021/06/construction-crane-surveyor-1.jpg'
  },
  {
    name: 'Laundry',
    image: 'https://res.cloudinary.com/mtree/image/upload/q_auto,f_auto,dpr_auto/Downy_US_MW/6CCVOCZnGmKCfE1HiETinK/f8cb90a383efdbb80eae1893374a4a52/ef9e5dab2cc86043cb7dc3a241c72716_2x.jpg'
  },
]);

const renderCategoryList = ({item, index}) => {
  return(
    <View style={{ paddingHorizontal: 15, paddingVertical: 15, alignItems: 'center' }}>
    <TouchableOpacity
      style={{ 
        width: 120, 
        height: 120,
      }}
      onPress={() => {
        navigation.navigate('ServiceList')
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        source={{uri: item.image}}
      />
    </TouchableOpacity>
    <Text>{item.name}</Text>
    </View>
  )
};

return (

  <ScrollView style={[styles.container]}>
    <View style={{ paddingHorizontal: 50 }}>
    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 30}}>
    <Image
        source={require('../assets/image/ServedLogo.png')}
        style={[styles.homeLogo]}
    />
    </View>
    <View style={{ justifyContent: 'center' }}>
    <Text style={{ fontSize: 30, fontWeight: 900, color: Colors.black, paddingVertical: 5, }}>Hi Eason Lim,</Text>
    <Text style={{ width: '60%', fontSize: 20, fontWeight: 700, color: Colors.black }}>What service are you looking for?</Text>
    </View>
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 40}}>
      <FlatList
        numColumns={3}
        data={categoryList}
        renderItem={renderCategoryList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

  </ScrollView>

);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  homeLogo: {
    width: 220,
    height: 50,
  },
  loginButton: {
    width: 200,
    height: 50,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    shadowColor: '#5B5B5B',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderRadius: 20,
    width: 300,
    height: 35,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
    paddingLeft: 10
  },
});

export default HomeScreen;
