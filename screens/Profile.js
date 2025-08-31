import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
function Profile() {
  const [everythingLoaded, setEverythingloaded] = useState(false);
  const [Userdata, setUserdata] = useState(null);
  async function fetchUserInfo() {
    const res = await fetch(
      'https://salonify-backend.vercel.app/api/auth/info',
      {
        method: 'GET',
        credentials: true,
      },
    );
    const output = await res.json();
    setUserdata(output);
    console.log(output);
    setEverythingloaded(true);
  }
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      {everythingLoaded ? (
        <>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {Userdata?.data?.userImage === null ? (
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  height: heightPercentageToDP('20%'),
                  width: widthPercentageToDP('40%'),
                }}
              ></Image>
            ) : (
              <Image
                source={{ uri: Userdata?.data?.userImage }}
                style={{
                  height: heightPercentageToDP('20%'),
                  width: widthPercentageToDP('40%'),
                  borderRadius: 100,
                }}
              ></Image>
            )}
            <Text style={{ fontSize: 20 }}>{Userdata?.data?.userName}</Text>
          </View>
          <View
            style={{
              margin: 20,
              width: widthPercentageToDP('90%'),
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 10,
              elevation: 1,
            }}
          >
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: 5,
                  margin: 10,
                }}
              >
                <Image
                  source={require('../assets/images/emailicon.png')}
                  style={{ height: 24, width: 24 }}
                ></Image>
                <Text style={{ marginLeft: 10 }}>
                  {Userdata?.data?.userEmail}
                </Text>
              </View>
            </View>

            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: 5,
                  margin: 10,
                }}
              >
                <Image
                  source={require('../assets/images/phoneicon.png')}
                  style={{ height: 24, width: 24 }}
                ></Image>
                <Text style={{ marginLeft: 10 }}>
                  {Userdata?.data?.userNumber}
                </Text>
              </View>
            </View>

            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: 5,
                  margin: 10,
                }}
              >
                <Image
                  source={require('../assets/images/locationpin.png')}
                  style={{ height: 24, width: 24 }}
                ></Image>
                <Text style={{ marginLeft: 10 }}>
                  {Userdata?.data?.userAddress}
                </Text>
              </View>
            </View>

            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: 5,
                  margin: 10,
                }}
              >
                <Image
                  source={require('../assets/images/earthicon.png')}
                  style={{ height: 24, width: 24 }}
                ></Image>
                <Text style={{ marginLeft: 10 }}>
                  {Userdata?.data?.userLocation.userCity}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: widthPercentageToDP('40%'),
                height: heightPercentageToDP('6%'),
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 1,
              }}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
            flex: 1,
          }}
        >
          <LottieView
            source={require('../assets/loader/Loading.json')}
            autoPlay
            loop
            style={{ height: 50, width: 50 }}
          />
        </View>
      )}
    </View>
  );
}

export default Profile;
