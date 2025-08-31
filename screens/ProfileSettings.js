import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';

function ApperanceTab() {
  const [userData, setuserData] = useState(null);
  const [userEmail, setuserEmail] = useState(null);
  const [userName, setuserName] = useState(null);
  const [userNumber, setuserNumber] = useState(null);
  const [userAddress, setuserAddress] = useState(null);
  const [userImage, setuserImage] = useState(null);
  async function fetchUserProfile() {
    const res = await fetch(
      'https://salonify-backend.vercel.app/api/auth/info',
      {
        method: 'GET',
        credentials: true,
      },
    );
    const output = await res.json();
    console.log(output);
    setuserData(output);
    setuserName(output.data.userName);
    setuserEmail(output.data.userEmail);
    setuserNumber(output.data.userNumber);
    setuserAddress(output.data.userAddress);
    setuserImage(output.data.userImage);
  }
  function uploadImage() {
    const result = launchImageLibrary(
      { mediaType: 'photo', selectionLimit: 1 },
      async el => {
        if (el.didCancel) {
          console.log('User Cancelled the operation');
        } else if (el.assets) {
          setuserImage(el.assets[0].uri);
          const data = new FormData();
          data.append('file', {
            uri: el.assets[0].uri,
            type: el.assets[0].type,
            name: el.assets[0].fileName,
          });
          data.append('cloud_name', 'drjbxyfr6');
          data.append('upload_preset', 'salonify_profiles');

          const res = await fetch(
            'https://api.cloudinary.com/v1_1/drjbxyfr6/image/upload',
            {
              method: 'POST',
              body: data,
            },
          );
          const output = await res.json();
          console.log(output);
          setuserImage(output.secure_url);
        }
      },
    );
  }
  function verifyandupdate() {}
  useEffect(() => {
    fetchUserProfile();
  }, []);
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={uploadImage}>
          {userImage === null ? (
            <Image
              source={require('../assets/images/user.png')}
              style={{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('40%'),
              }}
            ></Image>
          ) : (
            <Image
              source={{ uri: userImage }}
              style={{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('40%'),
                borderRadius: 100,
              }}
            ></Image>
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '70%',
          margin: 'auto',
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="What should we call you ?"
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 2,
            fontSize: 16,
            marginVertical: 15,
          }}
          value={userName}
          onChangeText={text => {
            setuserName(text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 2,
            fontSize: 16,
            marginVertical: 15,
            color: '#aaa',
          }}
          value={userEmail}
        ></TextInput>
        <TextInput
          placeholder="Can we call you on this number ?"
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 2,
            fontSize: 16,
            marginVertical: 15,
          }}
          value={userNumber?.toString()}
          onChangeText={text => {
            setuserNumber(text);
          }}
          keyboardType="number-pad"
        ></TextInput>
        <TextInput
          placeholder="See you around"
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 2,
            fontSize: 16,
            marginVertical: 15,
          }}
          value={userAddress}
          onChangeText={text => {
            setuserAddress(text);
          }}
        ></TextInput>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
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
            elevation: 1,
          }}
          onPress={verifyandupdate}
        >
          <Text>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ApperanceTab;
