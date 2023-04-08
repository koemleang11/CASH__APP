import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {navigate} from '../navigation/MainStack';

const DrawerScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('HomeScreen')}>
            <View style={styles.TextContainer}>
              <Text style={styles.TextTitle}>សកម្មភាពប្រចាំថ្ងៃ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  TextTitle: {
    paddingLeft: 10,
    fontSize: 18,
    color: colors.Black,
    fontFamily: 'Battambang-Bold',
  },
  TextContainer: {
    height: 36,
    borderWidth: 1,
    borderColor: colors.Primary,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
