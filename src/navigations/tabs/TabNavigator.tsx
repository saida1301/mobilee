import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VacanciesScreen from '../../screens/AllVacancies';
import CompanySearchScreen from '../../screens/CompanySearchScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,

          tabBarStyle: {
            backgroundColor: '#1c1c1c',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen} 
          options={({ route }) => ({
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: () => (
              <Ionicons name="home" size={24} color="black" />
            ),
          })}
        />
        <Tab.Screen
          name="MyReviews"
          component={VacanciesScreen}
          options={({ route }) => ({
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: () => (
              <Ionicons name="star" size={24} color="#8843E1" />
            ),
          })}
        />
                <Tab.Screen
          name="OpenAi"
          component={CompanySearchScreen}
          options={({ route }) => ({
            headerShown: false,
            tabBarShowLabel:false,
            tabBarIcon: () => (
              <Ionicons name="star" size={24} color="#8843E1" />
            ),
          })}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
