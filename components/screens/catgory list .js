import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const CategoryList = () => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const categories = [
    {
      id: 1,
      name: 'ארונות אמבטיה',
      imag: require('../database/images/products/m4.jpeg'),
    },
    {id: 2, name: 'ברזים',
    imag: require('../database/images/products/m2.jpeg'),
    },
    {id: 3, name: 'אווזרי אמבטיה'},
    {id: 4, name: 'כיורים'},
    {id: 5, name: 'מראות'},
    {id: 6, name: ' שישים'},
    // Add more categories as needed
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('cards')}>
          <Image style={styles.imgstyle} source={item.imag} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton}>
          <View>
            <Image
              source={require('../database/images/products/plus3.jpeg')}
              style={styles.plusIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      alignItems: 'center',
      height: 450,
      width: 300,
      margin: 10,
      marginHorizontal: 10,
      backgroundColor: 'black',
      borderRadius: 22,
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 20,
    },
    imgstyle: {
      width: 250,
      height: 250,
      borderRadius: 600,
      borderWidth: 7.5,
      borderColor: '#9F9F9F',
      marginTop: 13,
    },
    plusButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: 'white',
      borderRadius: 50,
      padding: 10,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    plusIcon: {
      width: 55,
      height: 55,
    },
  });

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
};

export default CategoryList;
