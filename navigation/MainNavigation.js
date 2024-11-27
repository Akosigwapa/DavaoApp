import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import HistoryScreen from '../components/HistoryScreen';
import TouristSpotsScreen from '../components/TouristSpotScreen';
import GeographyScreen from '../components/GeographyScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Create a stack navigator for each screen group if needed
const HistoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="History" component={HistoryScreen} />
  </Stack.Navigator>
);

const TouristSpotsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tourist Spots" component={TouristSpotsScreen} />
  </Stack.Navigator>
);

const GeographyStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Geography" component={GeographyScreen} />
  </Stack.Navigator>
);

// Main Navigator with Drawer
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="History">
        <Drawer.Screen name="History" component={HistoryStack} />
        <Drawer.Screen name="Tourist Spots" component={TouristSpotsStack} />
        <Drawer.Screen name="Geography" component={GeographyStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;