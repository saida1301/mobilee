import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from "./tabs/HomeTabs";
import Auth from "./stacks/AuthStack";
import SearchStack from "./stacks/SearchStack";
import VacanciesStack from "./stacks/VacanciesStack";
import TabNavigator from "./tabs/TabNavigator";


const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'slide_from_left'
        }}>
            <Stack.Screen name='authstack' component={Auth} />
            <Stack.Screen name='hometab' component={HomeTab} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Search" component={SearchStack} />
            <Stack.Screen name="Vacancies" component={VacanciesStack} />
        </Stack.Navigator>
    );
};

export default index;

const styles = StyleSheet.create({});