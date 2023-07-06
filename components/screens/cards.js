//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardScreen = () => {
  const cardData = [
    { id: 1, title: 'Card 1', description: 'This is card 1.' },
    { id: 2, title: 'Card 2', description: 'This is card 2.' },
    { id: 3, title: 'Card 3', description: 'This is card 3.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card Screen</Text>
      {cardData.map((card) => (
        <View key={card.id} style={styles.card}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: 'gray',
  },
});

export default CardScreen;
