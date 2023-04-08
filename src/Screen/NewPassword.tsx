import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../theme/colors';
import IconHeader from '../component/Header/IconHeader';
import TextInputs from '../component/atomiccomponent/TextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {PoppinBold} from '../config/fonts';
import ButtomCustom from '../component/atomiccomponent/ButtomCustom';
import TextInputImage from '../component/atomiccomponent/TextInputImage';

const ForgetPasswordScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.miniGray}}>
      <IconHeader
        images={require('../assets/Icons/ArrowBack.png')}
        text="New Password"
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
      <TextInputImage
        title="New Password"
        images={require('../assets/Icons/keys.png')}
        text="Please Enter New Password"
        image={require('../assets/Icons/EyeClose.png')}
      />
      <TextInputImage
        title="Confirm New Password"
        images={require('../assets/Icons/keys.png')}
        text="Please enter new password"
        image={require('../assets/Icons/EyeClose.png')}
      />
      {/* <DateTimePicker mode="date" display="spinner" value={date} /> */}
      <View style={{marginTop: 345}}>
        <ButtomCustom text="Update" />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({});
