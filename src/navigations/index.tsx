import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from "./tabs/HomeTabs";
import Auth from "./stacks/AuthStack";


const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'slide_from_left'
        }}>
            <Stack.Screen name='authstack' component={Auth} />
            <Stack.Screen name='hometab' component={HomeTab} />
        </Stack.Navigator>
    );
};

export default index;

const styles = StyleSheet.create({});