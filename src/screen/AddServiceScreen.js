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
import { createService } from '../../firebase-API/ServiceAPI'
import { CommonStore } from '../../store/CommonStore';
import { ServiceCategory } from '../../store/ServiceCategory';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';

const AddServiceScreen = (props) => {

const { navigation, route } = props;

const userSelected = CommonStore.useState(s => s.userSelected);

const [serviceName, setServiceName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState(0);
const [estimateHour, setEstimateHour] = useState(0);
const [category, setCategory] = useState('');


const [categoryList, setCategoryList] = useState(
  ServiceCategory.map((item) => (
    {
      label: item.name,
      value: item.id,
    }
  ))
);

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
        Add Service
      </Text>
    </View>
  ),
});

/* useEffect(() => {
  setCategoryList(
    ServiceCategory.map((item) => ({
      label: item.name,
      value: item.id,
    })),
  )
}); */

const createServiceFunc = () => {

      var serviceDetail = {
          serviceImg: '',
          serviceName: serviceName,
          serviceDescription: description,
          servicePrice: price,
          estimateHour: estimateHour,
          createdAt: Date.now(),
          isActive: true,
          sellerID: userSelected.id,
          serviceCategory: category,
      }
      createService(serviceDetail)
      Alert.alert('New Service', 'Successfully Added',
      [
        {
          text: "Done",
          onPress: () => navigation.navigate('SellerService'),
          style: "cancel",
        },
      ]
      )
      
      console.log(serviceDetail)
    }



return (

  <ScrollView style={[styles.container]}>
    <View style={{ paddingVertical: 20 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', paddingHorizontal: 30 }}>
          <View style={{ flex: 1, }}>
            <TouchableOpacity
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    backgroundColor: '#F1E5E5',
                    shadowColor: Colors.primaryColor,
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.55,
                    shadowRadius: 4.22,
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 60, fontWeight: 'bold' }}>+</Text>
            </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: '700', paddingBottom: 5, }}>Category :</Text>
              <View style={{ 
                width: 150, 
                height: 35,
                borderRadius: 10,
                backgroundColor: Colors.white,
                shadowColor: Colors.black,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
                }}>
              <RNPickerSelect
                placeholder={'Category'}
                placeholderStyle={{ fontSize: 10, color: Colors.black }}
                style={{ inputAndroid: { color: 'black' }}}
                items={categoryList}
                value={category}
                onValueChange={(value) => {
                  setCategory(value)
                  console.log(category)
                }
                }
              />
              </View>
              </View>
          </View>
    </View>
    <View style={{ paddingHorizontal: 30 }}>
        <View style={{ paddingBottom: 15, }}>
        <Text style={{ fontSize: 14, fontWeight: '700', paddingBottom: 5, }}>Service Name :</Text>
        <TextInput
          style={[styles.textInput]}
          placeholder="Enter service name..."
          value={serviceName}
          onChangeText={text => setServiceName(text)}
        />
        </View>
        <View style={{ paddingBottom: 15, }}>
        <Text style={{ fontSize: 14, fontWeight: '700', paddingBottom: 5, }}>Description :</Text>
        <TextInput
          style={[styles.textInputBig]}
          placeholder="Enter description..."
          multiline={true}
          textAlignVertical='top'
          value={description}
          onChangeText={text => setDescription(text)}
        />
        </View>
        <View style={{ paddingBottom: 15, }}>
        <Text style={{ fontSize: 14, fontWeight: '700', paddingBottom: 5, }}>Price :</Text>
        <TextInput
          style={[styles.textInput]}
          placeholder="Enter price..."
          keyboardType='number-pad'
          value={price}
          onChangeText={text => setPrice(text)}
        />
        </View>
        <View style={{ paddingBottom: 15, }}>
        <Text style={{ fontSize: 14, fontWeight: '700', paddingBottom: 5, }}>Estimate Hour :</Text>
        <TextInput
          style={[styles.textInput]}
          placeholder="Enter estimate hour...min 1 hour"
          keyboardType='number-pad'
          value={estimateHour}
          onChangeText={text => setEstimateHour(text)}
        />
        </View>
        <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={[styles.AddServiceButton]}
          onPress={() => {
            createServiceFunc()
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.black }}>Add Service</Text>
        </TouchableOpacity>
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
    borderRadius: 10,
    width: '100%',
    height: 35,
    backgroundColor: Colors.white,
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
  textInputBig: {
    borderRadius: 10,
    width: '100%',
    height: 100,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
    paddingLeft: 10,
    paddingTop: 5,
  },
  AddServiceButton: {
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
});

export default AddServiceScreen;
