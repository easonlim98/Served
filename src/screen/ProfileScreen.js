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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonStore } from '../../store/CommonStore';
import "firebase/auth";
import firebase from 'firebase/app';

const ProfileScreen = props => {

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
        Profile
      </Text>
    </View>
  ),
  headerRight: () => (
    <TouchableOpacity style={{
    }} 
    onPress={() => {
      CommonStore.update(s => {
        s.isLoggedIn = false;
      });
      firebase.auth().signOut()
    }}>
      <View style={{
        justifyContent: 'center',
        paddingLeft: 5,
      }}>
        <MaterialCommunityIcons
          name='logout'
          size={45}
          color={Colors.black}
          style={{
          }}
        />
      </View>
  </TouchableOpacity>
  ),
});

useEffect(() => {

  var tempTransaction = [];

  for (var i = 0; i < transactionList.length; i++){
    if(transactionList[i].customerId === userProfile[0].customerId){
      tempTransaction.push(transactionList[i])
      setUserTransactions(tempTransaction);
    }
  }

}, [transactionList, userProfile]);

const [userTransactions, setUserTransactions] = useState([]);

const [userProfile, setUserProfile] = useState([
  {
    customerId: 'EL1',
    name: 'Eason Lim',
    type: 'customer',
    image: 'https://cdn.vox-cdn.com/thumbor/sPIVB-yrRQEpikY57IUZ9qcuJsU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22266379/shin_ultraman.jpg',
    wallet: 80.00.toFixed(2),
  },
]);

const [transactionList, setTransactionList] = useState([
  {
    amount: 100.00.toFixed(2),
    customerId: 'EL1',
    serviceName: 'Aircon Service',
    createdAt: '13/12/2021 01:22PM'
  },
  {
    amount: 200.00.toFixed(2),
    customerId: 'EL1',
    serviceName: undefined,
    createdAt: '13/12/2021 01:22PM'
  },
  {
    amount: 200.00.toFixed(2),
    customerId: 'EL2',
    serviceName: 'Aircon Service',
    createdAt: '13/12/2021 01:22PM'
  },
  {
    amount: 250.00.toFixed(2),
    customerId: 'EL1',
    serviceName: undefined,
    createdAt: '15/12/2021 09:22AM'
  },
]);

const renderTransaction = ({ item, index }) => {
  return(
    <View style={{ flexDirection: 'row', paddingBottom: 15 }}>
      <View style={{ }}>
        <FontAwesome 
          name={item.serviceName === undefined ? 'plus-circle' : 'minus-circle'} 
          size={25}
          color={item.serviceName === undefined ? Colors.primaryColor : '#003BD1'}
        />
      </View>
      <View style={{ paddingLeft: 20 }}>
        <View style={{  }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold',
            color: item.serviceName === undefined ? Colors.primaryColor : '#003BD1'
            }}>
              RM {item.amount}
          </Text>
        </View>
        { item.serviceName === undefined ?
        <></>
        :
        <View style={{  }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.serviceName}</Text>
        </View>
        }
        <View style={{  }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.createdAt}</Text>
        </View>
      </View>
    </View>
  )
}

return (

  <ScrollView style={[styles.container]}>
      <View style={{ flexDirection: 'row', paddingVertical: 30, width: '80%', alignSelf: 'center' }}>
        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{
              borderRadius: 80,
              width: 120,
              height: 120,
            }}
            source={{ uri: userProfile[0].image }}
          />
        </View>
        <View style={{ width: '70%', paddingVertical: 10, paddingHorizontal: 30 }}>
          <View>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{userProfile[0].name}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Fontisto name={'wallet'} size={25} color={Colors.primaryColor}/>
              <Text style={{ paddingLeft: 15, fontSize: 20, fontWeight: 'bold' }}>RM {userProfile[0].wallet}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name={'plus-circle'} size={25} color={Colors.primaryColor} />
            </View>
          </View>
        </View>
    </View>
    
    <View style={{ 
      paddingHorizontal: 50,
      paddingVertical: 15, 
      height: 500, 
      width: '80%', 
      alignSelf: 'center',
      borderRadius: 20,
      shadowColor: Colors.black,
        shadowOffset: {
        width: 2,
        height: 2,
        },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 10, 
    }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Transaction</Text>
      </View>
    <FlatList
      style={{
        height: '80%',
        width: '80%',
        alignSelf: 'center',
      }}
      data={userTransactions}
      renderItem={renderTransaction}
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

export default ProfileScreen;
