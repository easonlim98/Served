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
import firebase from 'firebase/app';
import "firebase/auth";

const LoginScreen = props => {

const { navigation, route } = props;

//state//
//Login//
const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');
//Register//
const [regFullName, setRegFullName] = useState('');
const [regEmail, setRegEmail] = useState('');
const [regPassword, setRegPassword] = useState('');
const [regRepeatPassword, setRegRepeatPassword] = useState('');
//Other//
const [registrationScreen, setRegistrationScreen] = useState(false);
/////////


const loginFunc = () => {
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
          alert(error.message)
      });
};

const registerFunc = () => {

  if (regPassword == regRepeatPassword) {
    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
        .then(() => {
          setRegistrationScreen(false);
        })
        .catch((error) => {
            alert(error.message)
        });
  } else {
      alert("Passwords are different!")
  }
}

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
    { registrationScreen === false ?
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', paddingVertical: 40}}>
        <Image
          source={require('../assets/image/ServedLogo.png')}
          style={[styles.logo]}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'mail'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Email</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
          placeholder="Email"
          value={userEmail}
          onChangeText={text => setUserEmail(text)}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'key'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Password</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
          placeholder="Password"
          value={userPassword}
          onChangeText={text => setUserPassword(text)}
        />
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: 700, fontColor: Colors.black }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingVertical: 20 }}>
        <TouchableOpacity
          style={[styles.loginButton]}
          onPress={() => {
            loginFunc();
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, fontColor: Colors.black }}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', paddingVertical: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setRegistrationScreen(true);
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 700, fontColor: Colors.black, textDecorationLine: 'underline' }}>Create An Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    :
    <View style={[styles.container]}>
    <View style={{ padding: 20 }}>
      <TouchableOpacity
        onPress={() => {
          setRegistrationScreen(false);
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
          placeholder="Full Name"
          value={regFullName}
          onChangeText={text => setRegFullName(text)}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'mail'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Email</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
          placeholder="Email"
          value={regEmail}
          onChangeText={text => setRegEmail(text)}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'key'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Password</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
          placeholder="Password"
          value={regPassword}
          onChangeText={text => setRegPassword(text)}
        />
      </View>
      <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
          <Feather name={'key'} size={25} />
          <Text style={{ fontSize: 16, fontWeight: 700, fontColor: Colors.black, paddingVertical: 5, marginLeft: 10 }}>Repeat Password</Text>
        </View>
        <TextInput
          style={[styles.textInput]}
          placeholder="Repeat Password"
          value={regRepeatPassword}
          onChangeText={text => setRegRepeatPassword(text)}
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
          onPress={() => {
            registerFunc();
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, fontColor: Colors.black }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  }

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

export default LoginScreen;
