import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {PoppinBold} from '../../config/fonts';
import {goBack} from '../../navigation/MainStack';

const IconHeader = (props: any) => {
  return (
    <View>
      <StatusBar translucent={false} backgroundColor={colors.Primary} />
      <View
        style={{
          height: 60,
          width: '100%',
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colors.Primary,
        }}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => goBack()}>
          <View
            style={{
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.white,
              borderRadius: 8,
            }}>
            <Image source={props.images} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            ...PoppinBold,
            fontWeight: 'bold',
            color: colors.white,
          }}>
          {props.text}
        </Text>
        <View></View>
      </View>
    </View>
  );
};

export default IconHeader;

const styles = StyleSheet.create({});
