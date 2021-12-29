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

const ServiceDetailsScreen = props => {

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
        Phone Damage
      </Text>
    </View>
  ),
});

const [serviceDetails, setServiceDetails] = useState(
  {
    name: 'Phone Damage',
    image: 'https://blog.malwarebytes.com/wp-content/uploads/2015/05/photodune-9089398-mobile-devices-s-900x506.jpg',
    description: 'Scratched Sofa skin and bone break, required fixes',
    price: 50.00.toFixed(2),
    estimateHour: 4,
    starCount: 3,
  },
);

return (

  <ScrollView style={[styles.container]}>
    <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <AntDesign name={'star'} size={33} color={Colors.primaryColor}/>
        <AntDesign name={'message1'} size={33} color={Colors.black}/>
      </View>

      <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
            borderRadius: 10,
            width: 120,
            height: 120,
            }}
            source={{uri: serviceDetails.image}}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{serviceDetails.name}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'normal' }}>Description: </Text>
          <Text style={{ fontSize: 16, fontWeight: 'normal' }} numberOfLines={3}>{serviceDetails.description}</Text>       
        </View>
      </View>

      <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 10, alignItems: 'center' }}>
        <View style={{ flex: 1 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>Price:</Text>
        </View>
        <View style={{ flex: 2, paddingLeft: 10 }}>
        <View style={{
            width: 180,
            backgroundColor: Colors.priceContainer,
            paddingVertical: 3,
            borderRadius: 5
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>RM{serviceDetails.price}</Text>
        </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 15, alignItems: 'center' }}>
        <View style={{ flex: 1 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>Estimate Hour:</Text>
        </View>
        <View style={{ flex: 2, paddingLeft: 10 }}>
        <View style={{
            width: 180,
            backgroundColor: Colors.priceContainer,
            paddingVertical: 3,
            borderRadius: 5
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{serviceDetails.estimateHour} Hour</Text>
        </View>
        </View>
      </View>

      <View style={{ alignSelf: 'center', paddingVertical: 10, }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Checkout With</Text>
        <View style={{ paddingVertical: 20 }}>
        <TouchableOpacity 
            style={[styles.checkoutButton]}
            onPress={() => {

            }}
        >
           <Text style={{ fontSize: 24, fontWeight: '700' }}>Urgent Service</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 10, alignItems: 'center' }}>
        <View style={{ flex: 1 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>Date</Text>
        </View>
        <View style={{ flex: 2, paddingLeft: 10 }}>
        <TouchableOpacity style={{
            width: 180,
            backgroundColor: '#C6EB5F',
            paddingVertical: 5,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15
        }}>
          <AntDesign name={'calendar'} size={20}/>
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>12 Aug 2021</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 15, alignItems: 'center' }}>
        <View style={{ flex: 1 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>Time</Text>
        </View>
        <View style={{ flex: 2, paddingLeft: 10 }}>
        <TouchableOpacity style={{
            width: 180,
            backgroundColor: '#C6EB5F',
            paddingVertical: 5,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15
        }}>
          <AntDesign name={'clockcircleo'} size={20}/>
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>12:30 PM</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignSelf: 'center', paddingVertical: 10, }}>
      <View style={{ paddingVertical: 8 }}>
        <TouchableOpacity 
            style={[styles.checkoutButton]}
            onPress={() => {

            }}
        >
           <Text style={{ fontSize: 24, fontWeight: '700' }}>Schedule Booking</Text>
        </TouchableOpacity>
    </View>
    </View>

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
  checkoutButton: {
    width: 300,
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
    alignItems: 'center',
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

export default ServiceDetailsScreen;
