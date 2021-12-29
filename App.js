import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
//firebase//
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './config/key';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const headerOption = {
  headerTitleAlign: 'center',
  headerTintColor: Colors.black,
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

function LoginScreenStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
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
          tabBarStyle: {
            height: 80,
            borderTopWidth: 0,
          },
          tabBarVisible: route.state ? route.state.index > 0 ? false : true : null,
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return (
                <Ionicons name={'md-home-outline'} size={35} color={Colors.black}/>
              );
            } else if (route.name === 'OrderList') {
              return (
                <Ionicons name={'md-newspaper-outline'} size={35} color={Colors.black}/>
              );
            }
            else if (route.name === 'Chat') {
              return (
                <AntDesign name={'message1'} size={33} color={Colors.black}/>
              );
            }
            else if (route.name === 'Profile') {
              return (
                <Ionicons name={'md-person-outline'} size={35} color={Colors.black}/>
              );
            }
            // You can return any component that you like here!
            return <Feather name={'home'} size={35} color={Colors.grey}/>;
          
          },
        })}
        tabBarOptions={{
            showLabel: false,
            activeBackgroundColor: Colors.bottomTabBar,
            inactiveBackgroundColor: Colors.bottomTabBar,
            style: {
                //backgroundColor: Colors.bottomTabBar,
                //padding: 10
            },
        }}>
        <Tab.Screen name="Home" component={HomeScreenStack} options={{ headerShown: false }}/>
        <Tab.Screen name="OrderList" component={OrderListStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Chat" component={ChatStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }}/>
      </Tab.Navigator>
      :
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreenStack} options={{ headerShown: false }}/>
      </Stack.Navigator>
      }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});
