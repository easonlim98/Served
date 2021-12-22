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
  {name: 'Mobile'}, 
  {name: 'Vechicle'},
  {name: 'Construction'},
  {name: 'Laundry'},
]);

const renderCategoryList = ({item, index}) => {
  return(
    <View style={{ paddingHorizontal: 15, paddingVertical: 15, alignItems: 'center' }}>
    <TouchableOpacity
      style={{ 
        width: Dimensions.get('screen').width * 0.23, 
        height: Dimensions.get('screen').width * 0.23,
        borderWidth: 1,
        backgroundColor: Colors.primaryColor
      }}
      onPress={() => {
        navigation.navigate('ServiceList')
      }}
    >
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
    <Text style={{ fontSize: 30, fontWeight: 900, fontColor: Colors.black, paddingVertical: 5, }}>Hi Eason Lim,</Text>
    <Text style={{ width: '60%', fontSize: 20, fontWeight: 700, fontColor: Colors.black }}>What service are you looking for?</Text>
    </View>
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 40}}>
      <FlatList
        numColumns={3}
        data={categoryList}
        renderItem={renderCategoryList}
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
