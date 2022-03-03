import firebase from 'firebase/app';
import "firebase/firestore";
import { CommonStore } from '../store/CommonStore';

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

}



