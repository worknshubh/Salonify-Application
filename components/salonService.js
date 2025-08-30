import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function Salonservice(props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#eee',
        padding: 30,
        borderRadius: 10,
        elevation: 1,
      }}
    >
      <Image
        source={{ uri: props.salonData.serviceImage }}
        style={styles.salonserviceimg}
      ></Image>

      <Text style={{ fontSize: 20, margin: 8 }}>
        {props.salonData.serviceTitle}
      </Text>
      <View style={{ width: '80%', marginBottom: 10 }}>
        <Text style={{ textAlign: 'center' }}>
          {' '}
          {props.salonData.serviceDesc}
        </Text>
      </View>
      <View style={{ alignSelf: 'flex-start' }}>
        <View style={{ flexDirection: 'row', margin: 4, alignItems: 'center' }}>
          <Image
            source={require('../assets/images/rupee.png')}
            style={{ height: 18, width: 18, tintColor: '#aaa' }}
          ></Image>
          <Text style={{ fontSize: 16 }}>{props.salonData.serviceCost}</Text>
        </View>
        <View style={{ flexDirection: 'row', margin: 4, alignItems: 'center' }}>
          <Image
            source={require('../assets/images/locationpin.png')}
            style={{ height: 19, width: 19, tintColor: '#aaa' }}
          ></Image>
          <Text style={{ fontSize: 16 }}>{props.userAddress}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#ddd',
          paddingHorizontal: 25,
          paddingVertical: 13,
          borderRadius: 10,
          margin: 20,
          elevation: 1,
        }}
      >
        <Text style={{ fontSize: 17 }}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  salonserviceimg: {
    width: wp('75%'),
    height: hp('28%'),
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
export default Salonservice;
