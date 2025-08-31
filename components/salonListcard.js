import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Salonservice from '../components/salonService';
function Salonlistcard(props) {
  return (
    <View style={styles.salonlistbox}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
        }}
      >
        {props.salonData.userImage === null ? (
          <Image
            source={require('../assets/images/user.png')}
            style={{ height: 50, width: 50, marginRight: 4 }}
          ></Image>
        ) : (
          <Image
            source={{ uri: props.salonData.userImage }}
            style={{ height: 45, width: 45, borderRadius: 100, marginRight: 4 }}
          ></Image>
        )}
        <Text style={styles.salonname}>{props.salonData.saloonName}</Text>
      </View>
      <FlatList
        data={props.salonData.services[0].servicesOffered}
        renderItem={({ item }) => {
          return (
            <Salonservice
              salonData={item}
              userAddress={props.salonData.userAddress}
            />
          );
        }}
        style={{ flexDirection: 'row' }}
        horizontal
        showsHorizontalScrollIndicator={true}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  salonlistbox: {
    backgroundColor: '#fff',

    margin: 10,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    paddingBottom: 30,
  },
  salonname: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 8,
  },
});
export default Salonlistcard;
