import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vacancies from '../../components/Vacancies';
import AllVacancies from '../../screens/AllVacancies';
const Stack = createNativeStackNavigator();
const VacanciesStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Vacancies" component={Vacancies} />
    <Stack.Screen name="AllVacancies" component={AllVacancies} />

  </Stack.Navigator>
  )
}

export default VacanciesStack

const styles = StyleSheet.create({})