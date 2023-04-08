import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../container/LoginScreen';
import ForgetPasswordScreen from '../Screen/ForgetPasswordScreen';
import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import NewPassword from '../Screen/NewPassword';
import Registraation from '../Screen/Registraation';
import HomeScreen from '../container/HomeScreen';
import ButtomTapNavigator from './ButtomTapNavigator';

export const navigationRef: any = createNavigationContainerRef();

export function navigate(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }
}

export function push(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function reset(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  }
}

export function replace(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen component={ButtomTapNavigator} name="ButtomTapNavigator" />
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={ForgetPasswordScreen} name="ForgetPassword" />
      <Stack.Screen component={NewPassword} name="NewPassword" />
      <Stack.Screen component={Registraation} name="Registraation" />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
