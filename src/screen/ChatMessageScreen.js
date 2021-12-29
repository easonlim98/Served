import React, { Component, useReducer, useState, useEffect, useRef, useCallback } from 'react';
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
import { GiftedChat } from 'react-native-gifted-chat'

const ChatMessageScreen = props => {

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
          Repair Guy
        </Text>
      </View>
    ),
  });

const [messages, setMessages] = useState([]);

useEffect(() => {
  setMessages([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ])
}, [])

const onSend = useCallback((messages = []) => {
  setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
}, [])


return (

  <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
  />

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

export default ChatMessageScreen;
