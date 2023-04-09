import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../theme/colors';
import PromotionScreen from '../Screen/PromotionScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import ContactScreen from '../Screen/ContactScreen';

const Tab = createBottomTabNavigator();

const ButtomTapNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          activeTintColor: colors.Primary,
          inactiveTintColor: colors.Primary,
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: colors.DarkGray,
          position: 'absolute',
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../assets/Icons/Home.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={PromotionScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../assets/Icons/Promotion.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../assets/Icons/Notification.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../assets/Icons/Contact.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTapNavigator;

const styles = StyleSheet.create({});
