import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function Settingsmenu({ navigation }) {
  return (
    <View>
      <View style={{ margin: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#aaa',
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Account
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: '#fff',
          // padding: 10,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('apperanceTab');
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              padding: 10,
              borderColor: '#aaa',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20, padding: 5, borderColor: '#aaa' }}>
              Apperance
            </Text>
            <Image
              source={require('../assets/images/arrow.png')}
              style={{ height: 18, width: 18 }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              padding: 10,
              borderColor: '#aaa',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20, padding: 5 }}>Preference</Text>
            <Image
              source={require('../assets/images/arrow.png')}
              style={{ height: 18, width: 18 }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              padding: 10,
              borderColor: '#aaa',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20, padding: 5 }}>Notifications</Text>
            <Image
              source={require('../assets/images/arrow.png')}
              style={{ height: 18, width: 18 }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              // borderBottomWidth: 1,
              padding: 10,
              // borderColor: '#aaa',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20, padding: 5 }}>Logout</Text>
            <Image
              source={require('../assets/images/arrow.png')}
              style={{ height: 18, width: 18 }}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Settingsmenu;
