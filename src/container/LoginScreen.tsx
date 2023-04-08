import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {PoppinBold, PoppinSemiBold} from '../config/fonts';
import TextInputs from '../component/atomiccomponent/TextInput';
import ButtomCustom from '../component/atomiccomponent/ButtomCustom';
import {navigate} from '../navigation/MainStack';
import colors from '../theme/colors';
import {openDrawer} from '../navigation/MainDrawer';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.miniGray}}>
      <StatusBar translucent={false} backgroundColor={colors.miniGray} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 53,
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
          images={require('../assets/Icons/User.png')}
        />
        <TextInputs
          title="username"
          text="Enter Username"
          images={require('../assets/Icons/EyeClose.png')}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate('ButtomTapNavigator')}>
        <View style={{marginTop: 41}}>
          <ButtomCustom text="Log in " />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 26,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate('Registraation')}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate('ForgetPassword')}>
          <Text style={styles.text}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 35}}>
        <Text style={{fontSize: 16, color: '#828282'}}>Select Language</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
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

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#50246F',
    ...PoppinSemiBold,
    fontWeight: 'bold',
  },
});
