import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
// import page
import HomeScreen from '../screen/HomeScreen';
import VoucherScreen from '../screen/VoucherScreen';
import TakeawayScreen from '../screen/TakeawayScreen';
import ScanScreen from '../screen/ScanScreen';
import MainScreen from '../screen/MainScreen';
import CartScreen from '../screen/CartScreen';
import CartBeerDocketScreen from '../screen/CartBeerDocketScreen';
import CartPreorderScreen from '../screen/CartPreorderScreen';
import ProfileScreen from '../screen/ProfileScreen';
import OutletScreen from '../screen/subScreen/OutletScreen';
import CreateQueueScreen from '../screen/subScreen/CreateQueueScreen';
import ConfirmQueueScreen from '../screen/subScreen/ConfirmQueueScreen';
import CreateReservationScreen from '../screen/subScreen/CreateReservationScreen';
import ConfirmReservationScreen from '../screen/subScreen/ConfirmReservationScreen';
import ConfirmOrderScreen from '../screen/subScreen/ConfirmOrderScreen';
import OrderStatus from '../screen/subScreen/OrderStatus';
import OrderStatus1 from '../screen/subScreen/OrderStatus1';
import OrderStatus2 from '../screen/subScreen/OrderStatus2';
import OrderStatus3 from '../screen/subScreen/OrderStatus3';
import OrderStatus4 from '../screen/subScreen/OrderStatus4';
import OrderHistoryScreen from '../screen/subScreen/OrderHistoryScreen';
import ReceiptScreen from '../screen/subScreen/ReceiptScreen';
import OutletMenuScreen from '../screen/subScreen/OutletMenuScreen';
import MenuItemDetailsScreen from '../screen/subScreen/MenuItemDetailsScreen';
import MenuItemDetailsPreorderScreen from '../screen/subScreen/MenuItemDetailsPreorderScreen';
import ScanQRScreen from '../screen/subScreen/ScanQRScreen';
import DetailReceiptsScreen from '../screen/subScreen/DetailReceiptsScreen';
import FilterScreen from '../screen/subScreen/FilterScreen';
import PaymentMethodScreen from '../screen/subScreen/PaymentMethodScreen';
import ConnectionScreen from '../screen/subScreen/ConnectionScreen';
import AddPaymentScreen from '../screen/subScreen/AddPaymentScreen';
import AddressScreen from '../screen/subScreen/AddressScreen';
import HomeAddress from '../screen/subScreen/HomeAddress';
import WorkAddress from '../screen/subScreen/WorkAddress';
import NewAddress from '../screen/subScreen/NewAddress';
import AddAddress from '../screen/subScreen/AddAddress';
import EditAddress from '../screen/subScreen/EditAddress';
import SearchScreen from '../screen/subScreen/SearchScreen';
import FavouriteScreen from '../screen/subScreen/FavouriteScreen';
import CreditPointScreen from '../screen/subScreen/CreditPointScreen';
import RedemptionScreen from '../screen/subScreen/RedemptionScreen';
import RedeemDocketScreen from '../screen/subScreen/RedeemDocket';
import BeerDocketScreen from '../screen/subScreen/BeerDocket';
import ExtendDocketScreen from '../screen/subScreen/ExtendDocket';
import OrderDetailScreen from '../screen/subScreen/OrderHistoryDetail';
import HelpScreen from '../screen/subScreen/HelpCenter';
import SettingScreen from '../screen/subScreen/Setting';
import EditProfileScreen from '../screen/subScreen/EditProfile';
import InviteFriendScreen from '../screen/subScreen/InviteFriend';
import NotificationScreen from '../screen/subScreen/Notification';
import EarnHistoryScreen from '../screen/subScreen/EarnHistory';
import SpendHistoryScreen from '../screen/subScreen/SpendHistory';
import AllHistoryScreen from '../screen/subScreen/AllHistory';
import SetNotifyScreen from '../screen/subScreen/SetNotify';
import TermAndConditionScreen from "../screen/subScreen/T&C";
import CreditHistoryScreen from "../screen/subScreen/CreditHistoryScreen";
import MenuItemDetailsUpdateScreen from '../screen/subScreen/MenuItemDetailsUpdateScreen';
import CreateFeedbackScreen from '../screen/subScreen/CreateFeedbackScreen';
import UploadProfileScreen from '../screen/subScreen/UploadProfileScreen';
import PromotionListScreen from '../screen/subScreen/PromotionListScreen';
import PromotionDetailsScreen from '../screen/subScreen/PromotionDetailsScreen';
import PreorderListScreen from '../screen/subScreen/PreorderListScreen';
import DocketListScreen from '../screen/subScreen/DocketListScreen';
import VoucherDetailsScreen from '../screen/subScreen/VoucherDetailsScreen';
import ReviewListScreen from '../screen/subScreen/ReviewListScreen';
import Colors from '../constant/Colors';
import { Platform, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonStore } from '../store/commonStore';
import { DataStore } from '../store/dataStore';
import LanguageSelection from '../screen/subScreen/LanguageSelection';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const headerOption = {
  headerTitleStyle: {
    color: Platform.OS == 'ios' ? Colors.blackColor : Colors.blackColor,
  },
  headerTintColor: Colors.darkColor,
  headerStyle: {
    backgroundColor: Platform.OS == 'ios' ? '#ffffff' : Colors.whiteColor,
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 3,   
  },
};

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={headerOption} />
      <Stack.Screen name='Outlet' component={OutletScreen} options={headerOption} />
      <Stack.Screen name='CreateQueue' component={CreateQueueScreen} options={headerOption} />
      <Stack.Screen name='ConfirmQueue' component={ConfirmQueueScreen} options={headerOption} />
      <Stack.Screen name='CreateReservation' component={CreateReservationScreen} options={headerOption} />
      <Stack.Screen name='ConfirmReservation' component={ConfirmReservationScreen} options={headerOption} />
      <Stack.Screen name='ConfirmOrder' component={ConfirmOrderScreen} options={headerOption} />
      <Stack.Screen name='OrderStatus' component={OrderStatus} options={headerOption} />
      <Stack.Screen name='OrderStatus1' component={OrderStatus1} options={headerOption} />
      <Stack.Screen name='OrderStatus2' component={OrderStatus2} options={headerOption} />
      <Stack.Screen name='OrderStatus3' component={OrderStatus3} options={headerOption} />
      <Stack.Screen name='OrderStatus4' component={OrderStatus4} options={headerOption} />
      <Stack.Screen name='Filter' component={FilterScreen} options={headerOption} />
      <Stack.Screen name='OutletMenu' component={OutletMenuScreen} options={headerOption} />
      <Stack.Screen name='MenuItemDetails' component={MenuItemDetailsScreen} options={headerOption} />
      <Stack.Screen name='MenuItemDetailsPreorder' component={MenuItemDetailsPreorderScreen} options={headerOption} />
      <Stack.Screen name='ScanQR' component={ScanQRScreen} options={headerOption} />
      <Stack.Screen name='Search' component={SearchScreen} options={headerOption} />
      <Stack.Screen name='OrderHistory' component={OrderHistoryScreen} options={headerOption} />
      <Stack.Screen name="OrderHistoryDetail" component={OrderDetailScreen} options={headerOption} />
      <Stack.Screen name='Takeaway' component={TakeawayScreen} options={headerOption} />
      <Stack.Screen name="Cart" component={CartScreen} options={headerOption} />
      <Stack.Screen name="CartPreorder" component={CartPreorderScreen} options={headerOption} />
      <Stack.Screen name="Redemption" component={RedemptionScreen} options={headerOption} />
      <Stack.Screen name="RedeemDocket" component={RedeemDocketScreen} options={headerOption} />
      <Stack.Screen name="BeerDocket" component={BeerDocketScreen} options={headerOption} />
      <Stack.Screen name="ExtendDocket" component={ExtendDocketScreen} options={headerOption} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} options={headerOption} />
      <Stack.Screen name="AddPayment" component={AddPaymentScreen} options={headerOption} />
      <Stack.Screen name='Address' component={AddressScreen} options={headerOption} />
      <Stack.Screen name='HomeAddress' component={HomeAddress} options={headerOption} />
      <Stack.Screen name='WorkAddress' component={WorkAddress} options={headerOption} />
      <Stack.Screen name='NewAddress' component={NewAddress} options={headerOption} />
      <Stack.Screen name='AddAddress' component={AddAddress} options={headerOption} />
      <Stack.Screen name='EditAddress' component={EditAddress} options={headerOption} />
      <Stack.Screen name='MenuItemDetailsUpdate' component={MenuItemDetailsUpdateScreen} options={headerOption} />
      <Stack.Screen name='CreateFeedback' component={CreateFeedbackScreen} options={headerOption} />
      <Stack.Screen name='UploadProfile' component={UploadProfileScreen} options={headerOption} />
      <Stack.Screen name='PromotionList' component={PromotionListScreen} options={headerOption} />
      <Stack.Screen name='PreorderList' component={PreorderListScreen} options={headerOption} />
      <Stack.Screen name='DocketList' component={DocketListScreen} options={headerOption} />
      <Stack.Screen name='VoucherDetails' component={VoucherDetailsScreen} options={headerOption} />
      <Stack.Screen name='PromotionDetails' component={PromotionDetailsScreen} options={headerOption} />
      <Stack.Screen name='ReviewList' component={ReviewListScreen} options={headerOption} />
      <Stack.Screen name='LanguageScreen' component={LanguageSelection} options={headerOption} />
      <Stack.Screen name="CartBeerDocket" component={CartBeerDocketScreen} options={headerOption} />
    </Stack.Navigator>
  );
}

function TakeawayScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Takeaway' component={TakeawayScreen} options={headerOption} />
      <Stack.Screen name='Outlet' component={OutletScreen} options={headerOption} />
      <Stack.Screen name='CreateQueue' component={CreateQueueScreen} options={headerOption} />
      <Stack.Screen name='ConfirmQueue' component={ConfirmQueueScreen} options={headerOption} />
      <Stack.Screen name='CreateReservation' component={CreateReservationScreen} options={headerOption} />
      <Stack.Screen name='ConfirmReservation' component={ConfirmReservationScreen} options={headerOption} />
      <Stack.Screen name='OrderHistory' component={OrderHistoryScreen} options={headerOption} />
      <Stack.Screen name='OutletMenu' component={OutletMenuScreen} options={headerOption} />
      <Stack.Screen name='MenuItemDetails' component={MenuItemDetailsScreen} options={headerOption} />
      <Stack.Screen name='Address' component={AddressScreen} options={headerOption} />
      <Stack.Screen name='HomeAddress' component={HomeAddress} options={headerOption} />
      <Stack.Screen name='WorkAddress' component={WorkAddress} options={headerOption} />
      <Stack.Screen name='NewAddress' component={NewAddress} options={headerOption} />
      <Stack.Screen name='AddAddress' component={AddAddress} options={headerOption} />
      <Stack.Screen name='EditAddress' component={EditAddress} options={headerOption} />
      <Stack.Screen name='Search' component={SearchScreen} options={headerOption} />
      {/* <Stack.Screen name='Home' component={HomeScreen} options={headerOption} /> */}
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} options={headerOption} />
      <Stack.Screen name="AddPayment" component={AddPaymentScreen} options={headerOption} />
      <Stack.Screen name='Scan' component={ScanScreen} options={headerOption} />
      <Stack.Screen name='Filter' component={FilterScreen} options={headerOption} />
      {/* <Stack.Screen name="Cart" component={CartScreenStack} options={headerOption} /> */}
      <Stack.Screen name="Cart" component={CartScreen} options={headerOption} />
      <Stack.Screen name='MenuItemDetailsUpdateScreen' component={MenuItemDetailsUpdateScreen} options={headerOption} />
      <Stack.Screen name='CreateFeedback' component={CreateFeedbackScreen} options={headerOption} />
    </Stack.Navigator>
  );
}

function ScanScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scan" component={ScanScreen} options={headerOption} />
      <Stack.Screen
        name="OutletMenu"
        component={OutletMenuScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="MenuItemDetails"
        component={MenuItemDetailsScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="MenuItemDetailsUpdate"
        component={MenuItemDetailsUpdateScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}


function CartScreenStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="Outlet"
        component={OutletScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="OutletMenu"
        component={OutletMenuScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="MenuItemDetails"
        component={MenuItemDetailsScreen}
        options={headerOption}
      />
      <Stack.Screen
        name="MenuItemDetailsUpdate"
        component={MenuItemDetailsUpdateScreen}
        options={headerOption}
      />
      {/* <Stack.Screen name="Home" component={HomeScreenStack} options={headerOption} /> */}

      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} options={headerOption} />
      <Stack.Screen name="AddPayment" component={AddPaymentScreen} options={headerOption} />
      <Stack.Screen name='Address' component={AddressScreen} options={headerOption} />
    </Stack.Navigator>
  );
}

function VoucherScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Voucher"
        component={VoucherScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={ProfileScreen} options={headerOption} />
      <Stack.Screen name='OrderHistory' component={OrderHistoryScreen} options={headerOption} />
      <Stack.Screen name='Receipt' component={ReceiptScreen} options={headerOption} />
      <Stack.Screen name='ReceiptDetail' component={DetailReceiptsScreen} options={headerOption} />
      {/* <Stack.Screen name='Home' component={HomeScreen} options={headerOption} /> */}
      <Stack.Screen name='OrderStatus1' component={OrderStatus1} options={headerOption} />
      <Stack.Screen name='OrderStatus2' component={OrderStatus2} options={headerOption} />
      <Stack.Screen name='OrderStatus3' component={OrderStatus3} options={headerOption} />
      <Stack.Screen name='OrderStatus4' component={OrderStatus4} options={headerOption} />
      {/* <Stack.Screen name='ConfirmOrder' component={ConfirmOrderScreen} options={headerOption} /> */}
      <Stack.Screen name='OrderStatus' component={OrderStatus} options={headerOption} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} options={headerOption} />
      <Stack.Screen name="AddPayment" component={AddPaymentScreen} options={headerOption} />
      <Stack.Screen name="Connection" component={ConnectionScreen} options={headerOption} />
      <Stack.Screen name="Favourite" component={FavouriteScreen} options={headerOption} />
      <Stack.Screen name="CreditPoint" component={CreditPointScreen} options={headerOption} />
      <Stack.Screen name="Redemption" component={RedemptionScreen} options={headerOption} />
      <Stack.Screen name="RedeemDocket" component={RedeemDocketScreen} options={headerOption} />
      <Stack.Screen name="BeerDocket" component={BeerDocketScreen} options={headerOption} />
      <Stack.Screen name="ExtendDocket" component={ExtendDocketScreen} options={headerOption} />
      {/* <Stack.Screen name="EditProfile" component={EditProfileScreen} options={headerOption} /> */}
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={headerOption} />
      <Stack.Screen name="OrderHistoryDetail" component={OrderDetailScreen} options={headerOption} />
      <Stack.Screen name='Help Center' component={HelpScreen} options={headerOption} />
      <Stack.Screen name='Setting' component={SettingScreen} options={headerOption} />
      <Stack.Screen name='Invite Friend' component={InviteFriendScreen} options={headerOption} />
      <Stack.Screen name='Notification' component={NotificationScreen} options={headerOption} />
      <Stack.Screen name='Earn History' component={EarnHistoryScreen} options={headerOption} />
      <Stack.Screen name='Spend History' component={SpendHistoryScreen} options={headerOption} />
      <Stack.Screen name='All History' component={AllHistoryScreen} options={headerOption} />
      <Stack.Screen name='PushNotification' component={SetNotifyScreen} options={headerOption} />
      <Stack.Screen name='Term&Condition' component={TermAndConditionScreen} options={headerOption} />
      <Stack.Screen name='CreditHistory' component={CreditHistoryScreen} options={headerOption} />
      <Stack.Screen name='UploadProfile' component={UploadProfileScreen} options={headerOption} />
      <Stack.Screen name="Cart" component={CartScreen} options={headerOption} />
      <Stack.Screen name="CartBeerDocket" component={CartBeerDocketScreen} options={headerOption} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarVisible: route.state ? route.state.index > 0 ? false : true : null,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // if (route.name === 'Home') {
            //   return (
            //     <Image
            //       source={require('../asset/image/home.png')}
            //       style={{ width: 30, height: 20, resizeMode: "contain" }}></Image>
            //   );
            // } else if (route.name === 'Takeaway') {
            //   return (
            //     <Image
            //       source={require('../asset/image/package.png')}
            //       style={{ width: 30, height: 20, resizeMode: "contain" }}></Image>
            //   );
            // } else if (route.name === 'Scan') {
            //   return (
            //     <Image
            //       source={require('../asset/image/scan.png')}
            //       style={{ width: 30, height: 20, resizeMode: "contain" }}></Image>
            //   );
            // } else if (route.name === 'Voucher') {
            //   return (
            //     <Image
            //       source={require('../asset/image/voucher.png')}
            //       style={{ width: 30, height: 20, resizeMode: "contain" }}></Image>
            //   );
            // } else if (route.name === 'Profile') {
            //   return (
            //     <Image
            //       source={require('../asset/image/profile.png')}
            //       style={{ width: 20, height: 30, resizeMode: "contain" }}></Image>
            //   );
            // }

            if (route.name === 'Home') {
              return (
                <Image
                  source={require('../asset/image/home.png')}
                  style={{ width: 23, height: 23, resizeMode: "contain" }}></Image>
              );
            } else if (route.name === 'Takeaway') {
              return (
                <Image
                  source={require('../asset/image/package.png')}
                  style={{ width: 22, height: 22, resizeMode: "contain" }}></Image>
              );
            } else if (route.name === 'Scan') {
              return (
                <Image
                  source={require('../asset/image/scan.png')}
                  style={{ width: 23, height: 23, resizeMode: "contain" }}></Image>
              );
            } else if (route.name === 'Voucher') {
              return (
                <Image
                  source={require('../asset/image/voucher.png')}
                  style={{ width: 26, height: 28, resizeMode: "contain" }}></Image>
              );
            } else if (route.name === 'Profile') {
              return (
                <Image
                  source={require('../asset/image/profile.png')}
                  style={{ width: 21, height: 21, resizeMode: "contain" }}></Image>
              );
            }

            // You can return any component that you like here!
            return <Image name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.secondaryColor,
          inactiveTintColor: '#ffffff',
          labelStyle: {
            fontWeight: 'bold',
            marginTop: 4,
            fontSize: 10,
            fontFamily: 'NunitoSans-SemiBold',
          },
          showLabel: true,
          style: {
            backgroundColor: Colors.mainTxtColor,
            borderTopWidth: 0,
            paddingTop: 6,
            paddingBottom: 4,
          },
        }}>
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Takeaway" component={TakeawayScreenStack} />
        <Tab.Screen name="Scan" component={ScanScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

