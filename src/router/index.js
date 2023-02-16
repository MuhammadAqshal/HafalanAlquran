import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BottomNavigation } from '../components';
import {
  Home,
  Izin,
  IzinDetail,
  IzinEdit,
  Login,
  Register,
  Santri,
  SantriDetail,
  SantriEdit,
  Splash,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Santri" component={Santri} />
      <Tab.Screen name="Izin" component={Izin} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SantriDetail"
        component={SantriDetail}
        options={({ navigation, route }) => ({
          title: 'Detail Santri',
        })}
      />
      <Stack.Screen
        name="SantriEdit"
        component={SantriEdit}
        options={({ navigation, route }) => ({
          title: 'Edit Santri',
        })}
      />
      <Stack.Screen
        name="IzinDetail"
        component={IzinDetail}
        options={({ navigation, route }) => ({
          title: 'Detail Izin',
        })}
      />
      <Stack.Screen
        name="IzinEdit"
        component={IzinEdit}
        options={({ navigation, route }) => ({
          title: 'Edit Izin',
        })}
      />
    </Stack.Navigator>
  );
};

export default Router;
