import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Bookings from './Bookings';
import Profile from './Profile';
import { Image } from 'react-native';

function BottomNav() {
  const Bottomtab = createBottomTabNavigator();

  return (
    <Bottomtab.Navigator>
      <Bottomtab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <Image
                source={
                  focused === false
                    ? require('../assets/images/homeicon.png')
                    : require('../assets/images/homeiconactive.png')
                }
                style={{ height: size, width: size }}
              ></Image>
            );
          },
          tabBarActiveTintColor: '#000',
        }}
      ></Bottomtab.Screen>
      <Bottomtab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                source={
                  focused === false
                    ? require('../assets/images/schedulee.png')
                    : require('../assets/images/scheduleefocused.png')
                }
                style={{ height: size, width: size }}
              ></Image>
            );
          },
          tabBarActiveTintColor: '#000',
        }}
      ></Bottomtab.Screen>
      <Bottomtab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                source={
                  focused === false
                    ? require('../assets/images/user.png')
                    : require('../assets/images/userfocused.png')
                }
                style={{ height: size, width: size }}
              ></Image>
            );
          },
          tabBarActiveTintColor: '#000',
        }}
      ></Bottomtab.Screen>
    </Bottomtab.Navigator>
  );
}

export default BottomNav;
