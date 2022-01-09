import firebase from 'firebase/app';
import "firebase/firestore";

export const createOrder = async (orderDetail, created) => {
    firebase
        .firestore()
        .collection("Orders")
        .add(orderDetail)
        .then((snapshot) => {
            orderDetail.id = snapshot.id
            snapshot.set(orderDetail)
        })
        .then(() => console.log('successfully order'))
        .catch((error) => console.log(error))
}