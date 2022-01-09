import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from './src/constant/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonStore } from './store/CommonStore';
//import screens//
import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import ServiceListScreen from './src/screen/ServiceListScreen';
import ServiceDetailsScreen from './src/screen/ServiceDetailsScreen';
import OrderListScreen from './src/screen/OrderListScreen';
import ChatScreen from './src/screen/ChatScreen';
import ChatMessageScreen from './src/screen/ChatMessageScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import SellerServiceScreen from './src/screen/SellerServiceScreen';
import AddServiceScreen from './src/screen/AddServiceScreen';
import CustomerOrderScreen from './src/screen/CustomerOrderScreen'
console.reportErrorsAsExceptions = false;
//firebase//
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './constants/key';
import { CollectionFunc } from './util/CommonFunc'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const headerOption = {
  headerTitleAlign: 'center',
  //headerTintColor: Colors.black,
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

function LoginScreenStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Signin' component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Main' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ServiceList' component={ServiceListScreen} options={ headerOption } />
      <Stack.Screen name='ServiceDetails' component={ServiceDetailsScreen} options={ headerOption } />
    </Stack.Navigator>
  );
}

function OrderListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='OrderList' component={OrderListScreen} options={ headerOption } />
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Chat' component={ChatScreen} options={ headerOption } />
      <Stack.Screen name='ChatMessage' component={ChatMessageScreen} options={ headerOption } />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={ProfileScreen} options={ headerOption } />
      <Stack.Screen name='SellerService' component={SellerServiceScreen} options={ headerOption } />
      <Stack.Screen name='AddService' component={AddServiceScreen} options={ headerOption } />
      <Stack.Screen name='CustomerOrder' component={CustomerOrderScreen} options={ headerOption } />
    </Stack.Navigator>
  );
}


export default function App() {

  const isLoggedIn = CommonStore.useState(s => s.isLoggedIn);

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      CommonStore.update(s => {
        s.isLoggedIn = true;
      });
    } else {
      CommonStore.update(s => {
        s.isLoggedIn = false;
      });
    }
  });

  return (
    <NavigationContainer>
      { isLoggedIn ?
      <Tab.Navigator
        screenOptions={({ route }) => ({
            "tabBarActiveBackgroundColor": "#FFF500",
            "tabBarInactiveBackgroundColor": "#FFF500",
            "tabBarShowLabel": false,
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ],
          tabBarStyle: {
            height: 50,
            borderTopWidth: 0,
          },
          tabBarVisible: route.state ? route.state.index > 0 ? false : true : null,
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'MainBot') {
              return (
                <Ionicons name={'md-home-outline'} size={25} color={Colors.black}/>
              );
            } else if (route.name === 'OrderListBot') {
              return (
                <Ionicons name={'md-newspaper-outline'} size={25} color={Colors.black}/>
              );
            }
            else if (route.name === 'ChatBot') {
              return (
                <AntDesign name={'message1'} size={23} color={Colors.black}/>
              );
            }
            else if (route.name === 'ProfileBot') {
              return (
                <Ionicons name={'md-person-outline'} size={25} color={Colors.black}/>
              );
            }
            // You can return any component that you like here!
            return <Feather name={'home'} size={32} color={Colors.grey}/>;
          
          },
        })}>
        <Tab.Screen name="MainBot" component={HomeScreenStack} options={{ headerShown: false }}/>
        <Tab.Screen name="OrderListBot" component={OrderListStack} options={{ headerShown: false }}/>
        <Tab.Screen name="ChatBot" component={ChatStack} options={{ headerShown: false }}/>
        <Tab.Screen name="ProfileBot" component={ProfileStack} options={{ headerShown: false }}/>
      </Tab.Navigator>
      :
      <Stack.Navigator>
        <Stack.Screen name='Signin1' component={LoginScreenStack} options={{ headerShown: false }}/>
      </Stack.Navigator>
      }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});