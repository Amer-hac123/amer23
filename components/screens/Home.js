//import liraries
import { useNavigation } from '@react-navigation/native';
import React, {useEffect,useState} from 'react';
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


const tab = () => {};
// create a component
const scroll = Item.map(item => {
  return (
    <TouchableOpacity style={{}}>
      <View>
        <Image
          style={{width: 200, height: 180, borderRadius: 13, left:20, marginBottom: 90}}
          source={item.productImage}
        />
        <Text source={item.productname} style={{fontSize: 102}}></Text>
      </View>
    </TouchableOpacity>
  );
});

const Home = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLOURS.gray} barStyle="dark-content" />
     <TouchableOpacity style={styles.seall} onPress={()=>navigation.navigate('productinfo')}>
        <Text style={styles.seall}> see all</Text>
      </TouchableOpacity>

      <View style={styles.v1}>
        <TouchableOpacity>
          <Image
            source={require('../database/images/products/user.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate('mycart')}>
          <Image
            source={require('../database/images/products/shopping-cart.png')}
            style={styles.img1}
          />
        </TouchableOpacity>
        
      </View>

      <Text style={styles.text}>welcome </Text>
      <View style={styles.dd}>
        <Text style={styles.untext}>to baba store </Text>
      </View>
      
      <ScrollView horizontal showsVerticalScrollIndicator={false}>{scroll}</ScrollView>
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
    width: 48,
    right: 10,
  },
  img1: {
    height: 48,
    width: 48,
    
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
    right: -10,
  },
  untext: {
    color: 'white',
    fontSize: 45,
    left: 20,
  },
  seall: {
    color: 'blue',
    fontSize: 25,
    top: 135,
    left:'40%'
  },
  dd: {
    color: 'white',
    borderRadius: 22,
    top: -29,
    margin: 40,
    right: 30,
    width: '80%',
    height: '10%',
    backgroundColor: 'black',
  },
});

// define your styles

//make this component available to the app
export default Home;
