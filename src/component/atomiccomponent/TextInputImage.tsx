import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {width} from '../../theme/metrics';
import {PoppinBold} from '../../config/fonts';
import {Image} from 'react-native';
import colors from '../../theme/colors';

const TextInputs = (props: any) => {
  return (
    <>
      <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <Text style={{color: colors.Primary, ...PoppinBold, fontSize: 18}}>
          {props.title}
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={props.images} style={{tintColor: colors.DarkGray}} />
          <TextInput
            style={styles.input}
            placeholder={props.text}
            placeholderTextColor={colors.DarkGray}
          />
        </View>
        <Image source={props.image} style={{tintColor: colors.DarkGray}} />
      </View>
    </>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    height: 48,
    marginHorizontal: 20,
    borderColor: '#8795C8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    paddingLeft: 20,
  },
});
