import firebase from 'firebase/app';
import "firebase/firestore";
import { CommonStore } from '../store/CommonStore';
import React, { useState } from 'react';

export const CollectionFunc = async (firebaseUid) => {


    firebase.firestore()
        .collection('User')
        .where('email', '!=', '')
        .onSnapshot(snapshot => {
            console.log('User changed!');

            if (!snapshot.empty) {
                var tempUserList = [];

                for (var i = 0; i < snapshot.size; i++) {
                    const record = snapshot.docs[i].data();

                    tempUserList.push(record);
                }

                CommonStore.update(s => {
                    s.userList = tempUserList;
                });
            }
        });

    firebase.firestore()
        .collection('Service')
        .where('sellerID', '==', firebaseUid)
        .onSnapshot(snapshot => {
            console.log('Service changed!');

            if (!snapshot.empty) {
                var tempSellerServiceList = [];

                for (var i = 0; i < snapshot.size; i++) {
                    const record = snapshot.docs[i].data();
                    tempSellerServiceList.push(record);
                }

                CommonStore.update(s => {
                    s.sellerServiceList = tempSellerServiceList;
                });
            }
        });

    firebase.firestore()
        .collection('Service')
        .where('serviceName', '!=', '')
        .onSnapshot(snapshot => {
            console.log('Service changed!');

            if (!snapshot.empty) {
                var tempServiceList = [];

                for (var i = 0; i < snapshot.size; i++) {
                    const record = snapshot.docs[i].data();
                    tempServiceList.push(record);
                }

                CommonStore.update(s => {
                    s.serviceList = tempServiceList;
                });
            }
        });

    firebase.firestore()
        .collection('Orders')
        .where('customerID', '==', firebaseUid)
        .onSnapshot(snapshot => {
            console.log('Orders changed!');

            if (!snapshot.empty) {
                var tempOrderList = [];

                for (var i = 0; i < snapshot.size; i++) {
                    const record = snapshot.docs[i].data();

                    tempOrderList.push(record);
                }

                CommonStore.update(s => {
                    s.customerOrder = tempOrderList;
                });
            }
        });

}



