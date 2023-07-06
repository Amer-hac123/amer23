//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import mycart from './components/screens/Mycart';
import productinfo from './components/screens/prductifo';
import MyComponent from './components/screens/profile';
import profile from './components/screens/profile';
import cards from './components/screens/cards';
// create a component
const APP = () => {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="mycart" component={mycart} />
        <stack.Screen name="productinfo" component={productinfo} />
        <stack.Screen name="profile" component={profile} />
        <stack.Screen name="cards" component={cards} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default APP;
