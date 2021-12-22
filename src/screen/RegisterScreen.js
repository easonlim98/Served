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
  Touchable,
} from 'react-native';
import Colors from "../constant/Colors";
import Feather from 'react-native-vector-icons/Feather';

const RegisterScreen = props => {

const { navigation, route } = props;

const terms_of_use = () => {
  return (
    <TouchableOpacity
      onPress={() => {

      }}
    >
      <Text style={{ fontSize: 14, fontWeight: 700, textDecorationLine: 'underline' }}>Terms of Use</Text>
    </TouchableOpacity>
  );
}

const privacy_policy = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: 700, textDecorationLine: 'underline' }}>Privacy Policy</Text>
    </TouchableOpacity>
  );
}

return (
  <View style={[styles.container]}>
    <View style={{ padding: 20 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Feather name={'arrow-left'} size={40} />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 2, alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', paddingVertical: 40}}>
      <Text style={{ fontSize: 24, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Create Your Account</Text>
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'user'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Full Name</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'mail'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Email</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'key'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Password</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'key'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Password</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10, width: '70%' }}>
        <Text style={{ fontSize: 14, fontWeight: 700, paddingVertical: 5 }}>
          By registering, you confirm that you accept our {terms_of_use()} and {privacy_policy()}.
        </Text>
      </View>

      <View style={{ paddingVertical: 20 }}>
        <TouchableOpacity
          style={[styles.registerButton]}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, fontColor: Colors.black }}>Register</Text>
        </TouchableOpacity>
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
  registerButton: {
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

export default RegisterScreen;
