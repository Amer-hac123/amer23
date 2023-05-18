//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {COLOURS} from '../database/Database';
import {Item} from '../database/Database';
const categoryArray = [
  {id: 0, name: 'table'},
  {id: 1, name: 'table'},
  {id: 2, name: 'table'},
  {id: 3, name: 'table'},
];
const se = categoryArray.map(item => {
  return (
    <Text style={{fontSize: 60, margin: 40, marginBottom: 20, marginTop: 30}}>
      {item.name}
    </Text>
  );
});

const tab = () => {};
// create a component
const scroll = Item.map(item => {
  return (
    <TouchableOpacity style={{}}>
      <Image
        style={{width: 200, height: 200, borderRadius: 13, marginBottom: 90}}
        source={item.productname}
      />
      <Text source={item.productname} style={{fontSize: 102}}></Text>
    </TouchableOpacity>
  );
});
const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLOURS.gray} barStyle="dark-content" />

      <View style={styles.v1}>
        <TouchableOpacity>
          <Image
            source={require('../database/images/products/icon.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../database/images/products/shopping-cart.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>welcome </Text>
      <Text style={styles.untext}>to baba store </Text>
      <ScrollView showsVerticalScrollIndicator={false}>{scroll}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  img: {
    height: 48,
    width: 35,
  },
  v1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  text: {
    fontSize: 50,
    fontWeight: '900',
    margin: 10,
  },
  untext: {
    borderRadius: 13,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 70,
    fontSize: 55,
    fontWeight: '300',
    margin: 20,
    justifyContent: 'center',
    top: -20,
    height: '10%',
    width: '80%',
  },
});

// define your styles

//make this component available to the app
export default Home;
