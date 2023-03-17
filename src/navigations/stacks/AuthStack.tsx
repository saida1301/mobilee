import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../../screens/Auth/SignUp";
import Login from "../../screens/Auth/Login";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";


const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_right"
        }}>
         <Stack.Screen name="search" component={SearchScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={SignUp} />
        </Stack.Navigator>
    );
};

export default Auth;

const styles = StyleSheet.create({});