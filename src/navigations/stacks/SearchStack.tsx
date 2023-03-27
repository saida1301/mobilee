import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CompanySearchScreen from '../../screens/CompanySearchScreen';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CompanySearch" component={CompanySearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
