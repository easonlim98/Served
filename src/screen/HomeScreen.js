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
import { CommonStore } from '../../store/CommonStore';
import { ServiceCategory } from '../../store/ServiceCategory';


const HomeScreen = props => {

const { navigation, route } = props;

const userSelected = CommonStore.useState(s => s.userSelected);
const serviceCategorySelected = CommonStore.useState(s => s.serviceCategorySelected);
const serviceList = CommonStore.useState(s => s.serviceList);
const [userStore, setUserStore] = useState();


useEffect(()=> {
  console.log(userSelected)
},[userSelected])


//dummy data
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
        width: 85, 
        height: 85,
      }}
      onPress={() => {
        var tempServiceSelected = [];
          for(var x = 0; x < serviceList.length; x++){
            if(item.id === serviceList[x].serviceCategory){
              const record = serviceList[x];
              tempServiceSelected.push(record)
            }
          }
          CommonStore.update(s => {
            s.serviceCategorySelected = tempServiceSelected;
          });
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
    <Text style={{ fontSize: 12 }}>{item.name}</Text>
    </View>
  )
};

return (

  <ScrollView style={[styles.container]}>
    <View style={{ paddingHorizontal: 30 }}>
    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40}}>
    <Image
        source={require('../assets/image/ServedLogo.png')}
        style={[styles.homeLogo]}
    />
    </View>
    <View style={{ justifyContent: 'center' }}>
    <Text style={{ fontSize: 24, fontWeight: '900', color: Colors.black, paddingVertical: 5, }}>Hi {userSelected.name}</Text>
    <Text style={{ width: '80%', fontSize: 18, fontWeight: '700', color: Colors.black }}>What service are you looking for?</Text>
    </View>
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
      <FlatList
        numColumns={3}
        data={ServiceCategory}
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
