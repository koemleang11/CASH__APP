import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {width} from '../../theme/metrics';
import {PoppinBold} from '../../config/fonts';

const TextInputs = (props: any) => {
  return (
    <>
      <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <Text style={{color: '#50246F', ...PoppinBold, fontSize: 18}}>
          {props.title}
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={props.text}
          placeholderTextColor="#aaaa"
        />
        <Icon name={props.name} size={props.size} />
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
  },
});
