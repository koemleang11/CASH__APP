import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import {PoppinBold, PoppinSemiBold} from '../config/fonts';
import TextInputs from '../component/atomiccomponent/TextInput';
import ButtomCustom from '../component/atomiccomponent/ButtomCustom';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 97,
          marginBottom: 67,
        }}>
        <Image source={require('../assets/images/Logo.png')} />
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 25}}>
        <Text
          style={{
            color: '#50246F',
            ...PoppinBold,
            fontSize: 28,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </View>
      <View>
        <TextInputs
          title="username"
          text="Enter Username"
          name="user"
          size={26}
        />
        <TextInputs
          title="username"
          text="Enter Username"
          name="user"
          size={26}
        />
      </View>
      <View style={{marginTop: 41}}>
        <ButtomCustom text="Log in " />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 26,
        }}>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.text}>Forgot Password</Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 35}}>
        <Text style={{fontSize: 16, color: '#828282'}}>Select Language</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Image
            source={require('../assets/images/Cambodia.png')}
            style={{marginHorizontal: 10, height: 32, width: 40}}
          />
          <Image
            source={require('../assets/images/UnitedKingdom.png')}
            style={{marginHorizontal: 10, height: 32, width: 40}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#50246F',
    ...PoppinSemiBold,
    fontWeight: 'bold',
  },
});
