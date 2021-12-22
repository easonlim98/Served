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
//import screens//
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import HomeScreen from './src/screen/HomeScreen';
import ServiceListScreen from './src/screen/ServiceListScreen';
import OrderListScreen from './src/screen/OrderListScreen';
import ChatScreen from './src/screen/ChatScreen';
import ProfileScreen from './src/screen/ProfileScreen';
//firebase//
import firebase from 'firebase/app';
import "firebase/auth";

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
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ServiceList' component={ServiceListScreen} options={ headerOption } />
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

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyDcH2FVetcVZncDVK4P0WFexQVFmBrbzq0",
    authDomain: "served-35bae.firebaseapp.com",
    projectId: "served-35bae",
    storageBucket: "served-35bae.appspot.com",
    messagingSenderId: "49500369374",
    appId: "1:49500369374:web:7760163b7aa7331ba6ed4f"
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

 /*  return (
    <NavigationContainer>
        { isLoggedIn ?
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreenStack} options={{ headerShown: false }}/>
        </Stack.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreenStack} options={{ headerShown: false }}/>
          <Stack.Screen name='Register' component={RegisterScreenStack} options={{ headerShown: false }}/>
        </Stack.Navigator>
        }
    </NavigationContainer>
  ); */

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
                <AntDesign name={'message1'} size={35} color={Colors.black}/>
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
