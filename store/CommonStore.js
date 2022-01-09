import { Store } from 'pullstate';

export const CommonStore = new Store({

    isLoggedIn: false,
    firebaseUid: '',
    
    userList: [],
    userSelected: {},

    serviceList: [],
    sellerServiceList: [],
    serviceCategorySelected: [],
    serviceSelected: {},

    customerOrder: [],
    selectedCustomerOrder: [],

});