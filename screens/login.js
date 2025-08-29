import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Userlogin({ navigation }) {
  const [userEmail, setuserEmail] = useState(null);
  const [userPass, setuserPass] = useState(null);
  const [token, setToken] = useState(null);
  async function checkforToken() {
    const t = await AsyncStorage.getItem('token');
    setToken(t);
    if (t != null) {
      navigation.replace('drawer');
    }
  }
  useEffect(() => {
    checkforToken();
  }, []);
  async function verifyandredirect() {
    const res = await fetch(
      'https://salonify-backend.vercel.app/api/auth/user/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: userEmail,
          userPass: userPass,
        }),
      },
    );

    const output = await res.json();
    console.log(output);
    if (output.success === true) {
      await AsyncStorage.setItem('token', output.token);
      navigation.navigate('drawer');
    } else {
      console.log('Invalid UserEmail and Password');
    }
  }
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/loginbg.png')}
        style={{ height: '100%', width: '100%' }}
      >
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flex: 1,
            margin: 10,
          }}
        >
          <View style={{ alignSelf: 'flex-start' }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                margin: 10,
                marginBottom: 3,
              }}
            >
              User Login
            </Text>
            <Text style={{ fontSize: 16, margin: 10 }}>
              Enter Your Email and Password
            </Text>
          </View>

          <View style={{ width: widthPercentageToDP('90%') }}>
            <TextInput
              placeholder="Enter Your Email"
              style={{
                color: '#000',
                borderBottomWidth: 1,
                padding: 2,
                margin: 30,
              }}
              placeholderTextColor="#000"
              value={userEmail}
              onChangeText={text => {
                setuserEmail(text);
              }}
            ></TextInput>

            <TextInput
              placeholder="Enter Your Password"
              style={{
                color: '#000',
                borderBottomWidth: 1,
                padding: 2,
                marginTop: 10,
                marginBottom: 30,
                marginHorizontal: 30,
              }}
              placeholderTextColor="#000"
              value={userPass}
              onChangeText={text => {
                setuserPass(text);
              }}
            ></TextInput>
          </View>
          <View
            style={{
              width: widthPercentageToDP('90%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: widthPercentageToDP('40%'),
                height: heightPercentageToDP('6%'),
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={verifyandredirect}
            >
              <Text>Login Now</Text>
            </TouchableOpacity>

            <Text style={{ margin: 20 }}>Don't have an account? Register</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Userlogin;
