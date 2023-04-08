import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const Route = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <StatusBar translucent={false} backgroundColor={'#ffff'} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Route;

const styles = StyleSheet.create({});
