import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import HistoryImage from "../assets/Images/History.jpg";

const HistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>History of Davao</Text>
      <Image style={styles.historyImage} source={HistoryImage}/>
      <Text style={styles.content}>
        Davao City, officially known as the City of Davao, has a rich history
        rooted in its indigenous communities, including the Bagobo, Mandaya,
        and Manobo tribes. The name "Davao" is derived from the Bagobo word
        "Daba-daba," which means fire. Spanish explorers first arrived in the
        area in the 1840s, and by the early 20th century, it became a hub for
        settlers and Japanese immigrants. Today, Davao is a vibrant city known
        for its cultural diversity and economic significance in the Philippines.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
  content: { fontSize: 16, lineHeight: 24, textAlign: 'justify' },
  historyImage:{
    width:'100%',
    heigth:300,
  resizeMode:'contain',
  backgroundColor:'green',
  margin:0,
  padding:0
  }
});

export default HistoryScreen;