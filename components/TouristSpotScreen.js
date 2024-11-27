import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TouristSpotsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tourist Spots in Davao</Text>
      <Text style={styles.content}>
        - **Mount Apo**: The highest mountain in the Philippines, ideal for
        trekking and nature enthusiasts.
      </Text>
      <Text style={styles.content}>
        - **Davao Crocodile Park**: A must-visit for wildlife enthusiasts.
      </Text>
      <Text style={styles.content}>
        - **Eden Nature Park**: A picturesque location for nature walks and
        relaxation.
      </Text>
      <Text style={styles.content}>
        - **Samal Island**: Known for its pristine beaches and crystal-clear
        waters.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, marginBottom: 8 },
});

export default TouristSpotsScreen;