import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GeographyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Geography of Davao</Text>
      <Text style={styles.content}>
        Davao City is located in the southeastern part of Mindanao, bordered by
        the Davao Gulf to the south. The city covers an area of 2,444 square
        kilometers, making it one of the largest cities in the world in terms of
        land area. The region is known for its diverse landscapes, including
        beaches, mountains, and fertile plains. Its tropical climate ensures
        lush vegetation and thriving agriculture.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, lineHeight: 24, textAlign: 'justify' },
});

export default GeographyScreen;