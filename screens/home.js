import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CookieManager from '@react-native-cookies/cookies';
import Salonlistcard from '../components/salonListcard';
import { FlatList } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
function Home() {
  const [token, setToken] = useState(null);
  const [everythingLoaded, setEverythingloaded] = useState(false);
  const [salonData, setSalonData] = useState(null);
  async function getData() {
    const tokenData = await AsyncStorage.getItem('token');
    setToken(tokenData);
    CookieManager.set('https://salonify-backend.vercel.app', {
      name: 'token',
      value: tokenData,
      path: '/',
      version: '1',
      secure: false,
      httpOnly: true,
    });
  }
  async function fetchBrowseData() {
    const res = await fetch('https://salonify-backend.vercel.app/api/browse', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    const output = await res.json();
    console.log(output);
    setSalonData(output.saloonData);
    setEverythingloaded(true);
  }
  useEffect(() => {
    getData();
    fetchBrowseData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {everythingLoaded ? (
        <>
          <View style={styles.headingbox}>
            {/* <Image
          source={require('../assets/images/location.png')}
          style={{ height: 40, width: 40, marginRight: 2, tintColor: '#000' }}
        ></Image> */}
            <Text style={styles.headingline}>Salons Near You</Text>
          </View>
          <FlatList
            data={salonData}
            renderItem={({ item }) => {
              if (item.services.length != 0) {
                return <Salonlistcard salonData={item} />;
              }
            }}
          ></FlatList>
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
const styles = StyleSheet.create({
  headingline: {
    fontSize: 24,
    textAlign: 'center',
  },
  headingbox: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
