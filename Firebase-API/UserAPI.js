import firebase from 'firebase/app';
import "firebase/firestore"

export function createCustomer(userDetail, created){
    firebase.firestore()
    .collection('User')
    .add({
        name: userDetail.name,
        email: userDetail.email,
        type: userDetail.type,
        walletAmount: 0,
        createdAt: Date.now()
    }).then((data) => created(data))
    .catch((error) => console.log(error));
    console.log('created')
}

export async function getCustomer(customerRetrieved){

    var CustomerList = [];

    var snapshot = await firebase.firestore()
    .collection('User')
    .where('type', '==', 'CUSTOMER')
    .get()

    snapshot.forEach((doc) => {
        CustomerList.push(doc.data());
    });

    customerRetrieved(CustomerList);
}