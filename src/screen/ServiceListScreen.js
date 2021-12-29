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
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ServiceListScreen = props => {

const { navigation, route } = props;
navigation.setOptions({
  headerLeft: () => (
    <TouchableOpacity style={{
    }} 
    onPress={() => { props.navigation.goBack();
    }}>
      <View style={{
        justifyContent: 'center',
        paddingLeft: 5,
      }}>
        <Feather
          name="arrow-left"
          size={45}
          color={Colors.black}
          style={{
          }}
        />
      </View>
  </TouchableOpacity>
  ),
  headerTitle: () => (
    <View style={{
      justifyContent: 'center',
    }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: Colors.black,
        }}>
        Services
      </Text>
    </View>
  ),
});

const [serviceList, setServiceList] = useState([
  {
    name: 'Phone Damage',
    image: 'https://blog.malwarebytes.com/wp-content/uploads/2015/05/photodune-9089398-mobile-devices-s-900x506.jpg',
    description: 'Scratched Sofa skin and bone break, required fixes',
    price: 50.00.toFixed(2),
    starCount: 3,
  }, 
  {
    name: 'Scratch Screen',
    image: 'https://blueflag.com.au/static/3642cc73b5c4a9ceb5fa176c5f5506af/4dad2/vehicle-make.jpg',
    description: 'Table painting with free design options with this seller.',
    price: 150.00.toFixed(2),
    starCount: 5,
  },
  {
    name: 'All Kind Repair',
    image: 'https://www.crossthet.com.au/wp-content/uploads/2021/06/construction-crane-surveyor-1.jpg',
    description: 'Load heavy bed',
    price: 79.00.toFixed(2),
    starCount: 4,
  },
]);

const renderServiceList = ({item, index}) => {
  return(
    <View style={{ paddingHorizontal: 15, paddingVertical: 15, alignItems: 'center' }}>
    <TouchableOpacity
      style={{ 
        width: Dimensions.get('screen').width * 0.85,
        padding: 15,
        height: 150,
        borderRadius: 20,
        shadowColor: Colors.black,
          shadowOffset: {
          width: 2,
          height: 2,
          },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
      }}
      onPress={() => {
          navigation.navigate('ServiceDetails')
      }}
    >
      <View style={{ flex: 2.5 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                borderRadius: 10,
                width: 80,
                height: 80,
              }}
              source={{uri: item.image}}
            />
          </View>
          <View style={{ flex: 3, paddingLeft: 10, paddingRight: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
            </View>
            <View style={{ flex: 3, paddingVertical: 5 }}>
              <Text style={{ fontWeight: '600' }}>Description:</Text>
              <Text style={{ fontSize: 13 }} numberOfLines={2}>{item.description}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <AntDesign name={'star'} size={30} color={Colors.primaryColor}/>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ 
                fontSize: 16, 
                fontWeight: 'bold', 
                textAlign: 'center',
                backgroundColor: Colors.priceContainer,
                borderRadius: 5,
                width: '80%',
                height: '80%',
                paddingVertical: 5, 
              }}>
                RM{item.price}
              </Text>
        </View>
      </View>
    </TouchableOpacity>
    </View>
  )
};

return (

  <ScrollView style={[styles.container]}>
    <View style={{ paddingVertical: 30 }}>
    <View
        style={{
            width: 300,
            height: 40,
            backgroundColor: Colors.white,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: Colors.black,
            shadowOffset: {
            width: 0,
            height: 0,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 10,
            borderWidth: 1,
            borderColor: '#E5E5E5',
        }}>
        <Feather
            name="search"
            size={18}
            color={Colors.iconGrey}
            style={{marginLeft: 15}}
        />
        <TextInput
            style={{
            width: 220,
            fontSize: 15,
            fontFamily: 'NunitoSans-Regular',
            paddingLeft: 10,
            height: 40,
            }}
            clearButtonMode="while-editing"
            placeholder="Search your needs"
            //onChangeText={(text) => {
            //setSearch(text);
            //}}
            //value={}
        />
    </View>
    </View>
    <View style={{ paddingHorizontal: 40, paddingVertical: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total Services: 3</Text>
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={serviceList}
        renderItem={renderServiceList}
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

export default ServiceListScreen;
