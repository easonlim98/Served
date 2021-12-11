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

const LoginScreen = ({ navigation }) => {

return (
  <View style={[styles.container]}>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', paddingVertical: 40}}>
        <Image
          source={require('../assets/image/ServedLogo.png')}
          style={[styles.logo]}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name={'mail'} size={20} />
          <Text style={{ fontSize: 14, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Email</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name={'key'} size={20} />
          <Text style={{ fontSize: 14, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Password</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
        />
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 700, fontColor: Colors.black }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingVertical: 20 }}>
        <TouchableOpacity
          style={[styles.loginButton]}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, fontColor: Colors.black }}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', paddingVertical: 10 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register')
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 700, fontColor: Colors.black, textDecorationLine: 'underline' }}>Create An Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  </View>

);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logo: {
    width: 250,
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

export default LoginScreen;
