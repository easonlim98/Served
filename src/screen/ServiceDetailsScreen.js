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
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CommonStore } from '../../store/CommonStore'
import { createOrder } from '../../firebase-API/OrderAPI'
import { CollectionFunc } from '../../util/CommonFunc';

const ServiceDetailsScreen = props => {

const { navigation, route } = props;
navigation.setOptions({
  headerTitle: () => (
    <View style={{
      justifyContent: 'center',
    }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: Colors.black,
        }}>
        Services Details
      </Text>
    </View>
  ),
});

const serviceSelected = CommonStore.useState(s => s.serviceSelected);
const userSelected = CommonStore.useState(s => s.userSelected);

const [showConfirmationUrg, setShowConfirmationUrg] = useState(false);
const [showConfirmationSch, setShowConfirmationSch] = useState(false);


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

const createUrgentOrder = async () => {
    var orderDetail = {
      createdAt: Date.now(),
      orderType: 'URGENT',
      serviceID: serviceSelected.id,
      customerID: userSelected.id,
      status: 'pending',
      totalPrice: serviceSelected.servicePrice,
      estimateHour: serviceSelected.estimateHour,
      serviceImg: serviceSelected.serviceImg,
      serviceDescription: serviceSelected.serviceDescription,
      serviceName: serviceSelected.serviceName
    }
    await createOrder(orderDetail)
    console.log(orderDetail)
    Alert.alert('Successfully Ordered')
      setShowConfirmationUrg(false);
      navigation.navigate('Main');
      CollectionFunc();
}

const createScheduleOrder = async () => {
  var orderDetail = {
    createdAt: Date.now(),
    orderType: 'SCHEDULE',
    serviceID: serviceSelected.id,
    customerID: userSelected.id,
    status: 'pending',
    totalPrice: serviceSelected.servicePrice,
    estimateHour: serviceSelected.estimateHour,
    serviceImg: serviceSelected.serviceImg,
    serviceDescription: serviceSelected.serviceDescription,
    serviceName: serviceSelected.serviceName
  }
  await createOrder(orderDetail)
  console.log(orderDetail)
  Alert.alert('Successfully Ordered')
    setShowConfirmationSch(false);
    navigation.navigate('Main');
    CollectionFunc();
}

return (

  <ScrollView style={[styles.container]}>
    <Modal
      visible={showConfirmationUrg}
      transparent={true}
      animationType={'slide'}
    >
      <View style={[styles.ModalContainer]}>
        <View style={[styles.modalView]}>
          <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.white }}>Are you sure to purchase this service ?</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, }}>
              <Fontisto name={'wallet'} size={20} color={Colors.primaryColor}/>
              <Text style={{ paddingLeft: 12, fontSize: 16, fontWeight: 'bold', color: Colors.white }}>RM {userSelected.walletAmount}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '75%',justifyContent: 'space-between', paddingTop: 20 }}>
            <TouchableOpacity style={{ 
              width: 80,
              height: 35,
              backgroundColor: Colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
             }}
              onPress={() => {
                createUrgentOrder();
              }}
             >
               <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>CONFIRM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ 
              width: 80,
              height: 35,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
             }}
              onPress={() => {
                setShowConfirmationUrg(false);
              }}
             >
               <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    <Modal
      visible={showConfirmationSch}
      transparent={true}
      animationType={'slide'}
    >
      <View style={[styles.ModalContainer]}>
        <View style={[styles.modalView]}>
          <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.white }}>Are you sure to purchase this service ?</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, }}>
              <Fontisto name={'wallet'} size={20} color={Colors.primaryColor}/>
              <Text style={{ paddingLeft: 12, fontSize: 16, fontWeight: 'bold', color: Colors.white }}>RM {userSelected.walletAmount}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '75%',justifyContent: 'space-between', paddingTop: 20 }}>
            <TouchableOpacity style={{ 
              width: 80,
              height: 35,
              backgroundColor: Colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
             }}
              onPress={() => {
                createScheduleOrder();
              }}
             >
               <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>CONFIRM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ 
              width: 80,
              height: 35,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
             }}
              onPress={() => {
                setShowConfirmationSch(false);
              }}
             >
               <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <AntDesign name={'star'} size={33} color={Colors.primaryColor}/>
        <AntDesign name={'message1'} size={25} color={Colors.black}/>
      </View>

      <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
        <View style={{ flex: 0.8 }}>
          <Image
            style={{
            borderRadius: 10,
            width: 100,
            height: 100,
            }}
            source={{uri: serviceSelected.serviceImg}}
          />
        </View>
        <View style={{ flex: 1.3 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{serviceSelected.serviceName}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'normal' }}>Description: </Text>
          <Text style={{ fontSize: 14, fontWeight: 'normal' }} numberOfLines={2}>{serviceSelected.serviceDescription}</Text>       
        </View>
      </View>

      <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 10, alignItems: 'center' }}>
        <View style={{ flex: 0.7 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'right' }}>Price:</Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
        <View style={{
            width: 150,
            backgroundColor: Colors.priceContainer,
            paddingVertical: 3,
            borderRadius: 5
        }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>RM{serviceSelected.servicePrice}</Text>
        </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 15, alignItems: 'center' }}>
        <View style={{ flex: 0.7 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'right' }}>Estimate Hour:</Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
        <View style={{
            width: 150,
            backgroundColor: Colors.priceContainer,
            paddingVertical: 3,
            borderRadius: 5
        }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{serviceSelected.estimateHour} Hour</Text>
        </View>
        </View>
      </View>

      <View style={{ alignSelf: 'center', paddingVertical: 10, }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Checkout With</Text>
        <View style={{ paddingVertical: 20 }}>
        <TouchableOpacity 
            style={[styles.checkoutButton]}
            onPress={() => {
              setShowConfirmationUrg(true)
            }}
        >
           <Text style={{ fontSize: 18, fontWeight: '700' }}>Urgent Service</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 10, alignItems: 'center' }}>
        <View style={{ flex: 1 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'right' }}>Date</Text>
        </View>
        <View style={{ flex: 2, paddingLeft: 10 }}>
        <TouchableOpacity style={{
            width: 150,
            backgroundColor: '#C6EB5F',
            paddingVertical: 5,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15
        }}>
          <AntDesign name={'calendar'} size={20}/>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>12 Aug 2021</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 15, alignItems: 'center' }}>
        <View style={{ flex: 1 , paddingHorizontal: 5}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'right' }}>Time</Text>
        </View>
        <View style={{ flex: 2, paddingLeft: 10 }}>
        <TouchableOpacity style={{
            width: 150,
            backgroundColor: '#C6EB5F',
            paddingVertical: 5,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15
        }}>
          <AntDesign name={'clockcircleo'} size={20}/>
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>12:30 PM</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignSelf: 'center', paddingVertical: 10, }}>
      <View style={{ paddingVertical: 8 }}>
        <TouchableOpacity 
            style={[styles.checkoutButton]}
            onPress={() => {
              setShowConfirmationSch(true)
            }}
        >
           <Text style={{ fontSize: 18, fontWeight: '700' }}>Schedule Booking</Text>
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
  ModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    height: 170,
    width: 250,
    backgroundColor: Colors.grey,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  homeLogo: {
    width: 220,
    height: 50,
  },
  checkoutButton: {
    width: 250,
    height: 40,
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
