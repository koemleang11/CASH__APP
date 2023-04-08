import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Route from './src/navigation/Route';
import {Provider} from 'react-redux';
import store from './src/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
