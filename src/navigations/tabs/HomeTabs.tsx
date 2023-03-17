import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeStack from '../stacks/HomeStack';

const Tab = createBottomTabNavigator();

const Index = () => {


    return (<>

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#1C1C1C',
                    activeTintColor: '#018CF1',
                    inactiveTintColor: '#f9f9f9',
                }
            }}

        >
            <Tab.Screen
                name='Company'
                component={HomeStack}
                options={{

                    tabBarLabel: 'Company',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chess-rook" color={color} size={26} />
                    )
                }}

            />

            <Tab.Screen
                name='Device'
                component={DeviceStack}
                options={{

                    tabBarLabel: 'Restourans',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="restaurant" color={color} size={26} />
                    )
                }}

            />


            <Tab.Screen
                name='Lottie'
                component={LottieStack}
                options={{

                    tabBarLabel: 'Shops',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
                    )
                }}

            />

            <Tab.Screen
                name='Favorites'
                component={FavoriteStack}
                options={{

                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark-outline" color={color} size={26} />
                    )
                }}

            />


        </Tab.Navigator>


    </>
    )
}

export default Index