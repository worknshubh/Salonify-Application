import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNav from './BottoNav';
import Bookings from './Bookings';
import Profile from './Profile';
import Settingsmenu from './Settings';
import { Image } from 'react-native';
const Drawer = createDrawerNavigator();
function Drawermenu() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <Image
              source={require('../assets/images/search.png')}
              style={{ height: 35, width: 35, marginRight: 15 }}
            ></Image>
          );
        },
      }}
    >
      <Drawer.Screen
        name="bottomnav"
        component={BottomNav}
        options={{
          headerTitle: 'Home',
          drawerLabel: 'Home',
          drawerActiveBackgroundColor: '#fff',
          drawerActiveTintColor: 'grey',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/homeicon.png')}
                style={
                  focused === false
                    ? { height: size, width: size }
                    : { height: size, width: size, tintColor: '#000' }
                }
              ></Image>
            );
          },
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="bookings"
        component={Bookings}
        options={{
          headerTitle: 'Bookings',
          drawerLabel: 'Bookings',
          drawerActiveBackgroundColor: '#fff',
          drawerActiveTintColor: 'grey',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/schedulee.png')}
                style={
                  focused === false
                    ? { height: size, width: size }
                    : { height: size, width: size, tintColor: '#000' }
                }
              ></Image>
            );
          },
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          drawerLabel: 'Profile',
          drawerActiveBackgroundColor: '#fff',
          drawerActiveTintColor: 'grey',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/user.png')}
                style={
                  focused === false
                    ? { height: size, width: size }
                    : { height: size, width: size, tintColor: '#000' }
                }
              ></Image>
            );
          },
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="settings"
        component={Settingsmenu}
        options={{
          headerTitle: 'Settings',
          drawerLabel: 'Settings',
          drawerActiveBackgroundColor: '#fff',
          drawerActiveTintColor: 'grey',
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/images/settings.png')}
                style={
                  focused === false
                    ? { height: size, width: size }
                    : { height: size, width: size, tintColor: '#000' }
                }
              ></Image>
            );
          },
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default Drawermenu;
