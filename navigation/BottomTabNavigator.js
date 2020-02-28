import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Icon, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ContactScreen from '../screens/ContactScreen';
import ExperienceScreen from '../screens/ExperienceScreen';

//const BottomTab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#000', borderTopColor: '#c32865', borderStyle: 'dashed', }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          showLabel: false,
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Image source={require('../src/assets/img/about2.png')} style={{ width: 32, height: 32, }} />
            </View>),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          showLabel: false,
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Image source={require('../src/assets/img/portfolio2.png')} style={{ width: 32, height: 32, }} />
            </View>),
        }}
      />
      <Tab.Screen
        name="Experience"
        component={ExperienceScreen}
        options={{
          showLabel: false,
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Image source={require('../src/assets/img/experiences2.png')} style={{ width: 32, height: 32, }} />
            </View>),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          showLabel: false,
          tabBarLabel: '',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Image source={require('../src/assets/img/contact2.png')} style={{ width: 32, height: 32, }} />
            </View>),
        }}
      />
    </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return (
        <View style={{ width: '100%' }}>
          <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#A7414A', width: '100%' }}>Hola!</Text>
        </View>
      );
    case 'Portfolio':
      return (
        <View style={{ width: '100%' }}>
          <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#6A8A82', width: '100%' }}>Project Portfolios!</Text>
        </View>
      );
    case 'Experience':
      return (
        <View style={{ width: '100%' }}>
          <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#563838', width: '100%' }}>Work Experiences!</Text>
        </View>
      );
    case 'Contact':
      return (
        <View style={{ width: '100%' }}>
          <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#A37C27', width: '100%' }}>Contact!</Text>
        </View>
      );
  }
}
