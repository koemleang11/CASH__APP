import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from '../container/DrawerScreen';
import MainStack, {navigationRef} from './MainStack';
import {DrawerActions} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export function openDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
}
export function closeDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
}

export function toggleDrawer(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.toggleDrawer());
  }
}
const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerTransparent: false,
        headerShown: false,
        drawerStyle: {width: '80%'},
        overlayColor: 'transparent',
      }}
      drawerContent={(props: any) => <DrawerScreen {...props} />}>
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
