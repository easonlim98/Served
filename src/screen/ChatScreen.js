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

const ChatScreen = props => {

const { navigation, route } = props;

navigation.setOptions({
  headerLeft: () => (
    <TouchableOpacity style={{
    }} 
    onPress={() => { props.navigation.goBack();
    }}>
      <View style={{
        justifyContent: 'center',
      }}>
        <Feather
          name="arrow-left"
          size={24}
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
          fontSize: 24,
          fontWeight: 'bold',
          color: Colors.black,
        }}>
        Conversations
      </Text>
    </View>
  ),
});

const [conversationList, setConversationList] = useState([
  {
    name: 'Car Repair Services',
    image: 'https://cdn.vox-cdn.com/thumbor/sPIVB-yrRQEpikY57IUZ9qcuJsU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22266379/shin_ultraman.jpg',
    lastMessage: 'i cant fix the stupid car',
  },
  {
    name: 'Bed lifting',
    image: 'https://cdn.vox-cdn.com/thumbor/sPIVB-yrRQEpikY57IUZ9qcuJsU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22266379/shin_ultraman.jpg',
    lastMessage: 'heavy sial',
  }, 
  {
    name: 'Served Sdn Bhd',
    image: 'https://cdn.vox-cdn.com/thumbor/sPIVB-yrRQEpikY57IUZ9qcuJsU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22266379/shin_ultraman.jpg',
    lastMessage: 'please provide us the details of your problems',
  },  
]);

const renderConversationList = ({item, index}) => {
  return(
    <View style={{ paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center' }}>
      <TouchableOpacity
        style={{ 
          width: Dimensions.get('screen').width * 0.85,
          height: 80,
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 20,
          backgroundColor: Colors.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
        onPress={() => {
            navigation.navigate('ChatMessage');
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                borderRadius: 80,
                width: 45,
                height: 45,
              }}
              source={{ uri: item.image }}
            />
          </View>
          <View style={{ flex: 3.5 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }} numberOfLines={1}>{item.name}</Text>
            <Text style={{ fontSize: 12, fontWeight: '700', color: '#5F5F5F' }} numberOfLines={2}>{item.lastMessage}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
};

return (

<ScrollView style={[styles.container]}>
    <View style={{ paddingVertical: 20 }}>
    <View
        style={{
            width: 300,
            height: 40,
            backgroundColor: Colors.white,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: Colors.black,
            shadowOffset: {
            width: 0,
            height: 0,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 10,
            borderWidth: 1,
            borderColor: '#E5E5E5',
        }}>
        <Feather
            name="search"
            size={18}
            color={Colors.iconGrey}
            style={{marginLeft: 15}}
        />
        <TextInput
            style={{
            width: 220,
            fontSize: 15,
            paddingLeft: 10,
            height: 40,
            }}
            clearButtonMode="while-editing"
            placeholder="Search your conversations"
            //onChangeText={(text) => {
            //setSearch(text);
            //}}
            //value={}
        />
    </View>
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={conversationList}
        renderItem={renderConversationList}
        keyExtractor={(item, index) => index.toString()}
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

export default ChatScreen;
