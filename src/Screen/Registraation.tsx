import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import IconHeader from '../component/Header/IconHeader';
import TextInputs from '../component/atomiccomponent/TextInput';
import ButtomCustom from '../component/atomiccomponent/ButtomCustom';

const Registraation = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.miniGray}}>
      <IconHeader
        images={require('../assets/Icons/ArrowBack.png')}
        text="Forgot Password"
      />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 29,
            marginBottom: 12,
          }}>
          <Image source={require('../assets/Icons/Avatar.png')} />
          <View style={{height: 16, width: 13, marginTop: -20, marginLeft: 50}}>
            <Image source={require('../assets/Icons/Camera.png')} />
          </View>
        </View>
        <TextInputs
          title="Username"
          text="Enter Username"
          images={require('../assets/Icons/User.png')}
        />
        <TextInputs
          title="New Password"
          text="Enter New Password"
          images={require('../assets/Icons/User.png')}
        />
        <TextInputs
          title="Confirm New Password"
          text="Enter New Password"
          images={require('../assets/Icons/User.png')}
        />
        <TextInputs
          title="Date Of birth"
          text="Select Date"
          images={require('../assets/Icons/User.png')}
        />
        <TextInputs
          title="National ID"
          text="Enter National ID"
          images={require('../assets/Icons/User.png')}
        />
        <TextInputs
          title="Phone"
          text="Phone Number"
          images={require('../assets/Icons/User.png')}
        />
        <View style={{marginTop: 30, marginBottom: 20}}>
          <ButtomCustom text="Submit" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registraation;

const styles = StyleSheet.create({});
