import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PoppinBold} from '../../config/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ButtomCustom = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ButtomCustom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#50246F',
    marginHorizontal: 20,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...PoppinBold,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
