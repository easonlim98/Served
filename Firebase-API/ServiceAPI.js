import firebase from 'firebase/app';
import "firebase/firestore";

export const createService = async (serviceDetail, created) => {
    firebase
        .firestore()
        .collection("Service")
        .add(serviceDetail)
        .then((snapshot) => {
            serviceDetail.id = snapshot.id
            snapshot.set(serviceDetail)
        })
        .then(() => console.log('successfully added'))
        .catch((error) => console.log(error))
}