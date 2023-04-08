import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../theme/colors';
import IconHeader from '../component/Header/IconHeader';
import TextInputs from '../component/atomiccomponent/TextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {PoppinBold} from '../config/fonts';
import ButtomCustom from '../component/atomiccomponent/ButtomCustom';
import {navigate} from '../navigation/MainStack';

const ForgetPasswordScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.miniGray}}>
      <IconHeader
        images={require('../assets/Icons/ArrowBack.png')}
        text="Forgot Password"
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 29,
          marginBottom: 32,
        }}>
        <Image source={require('../assets/Icons/Key.png')} />
      </View>
      <TextInputs
        title="Please enter your national ID card"
        text="ID Card"
        images={require('../assets/Icons/Id.png')}
      />
      <TextInputs
        title="Phone Number"
        text="Phone Number"
        images={require('../assets/Icons/PhoneCall.png')}
      />
      {/* <DateTimePicker mode="date" display="spinner" value={date} /> */}
      <TextInputs
        title="Date Of Birth"
        text="Select Date"
        images={require('../assets/Icons/Calender.png')}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 73,
          marginBottom: 120,
        }}>
        <Text
          style={{
            fontSize: 16,
            ...PoppinBold,
            color: colors.Primary,
            marginBottom: 13,
          }}>
          OR
        </Text>
        <Text style={{fontSize: 16, ...PoppinBold, color: colors.Primary}}>
          Contact Admin
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate('NewPassword')}>
        <ButtomCustom text="Reset" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({});
