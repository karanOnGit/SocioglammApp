import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import EcommerceScreen from '../screens/EcommerceScreen';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#000',
                tabBarStyle: { backgroundColor: '#fff' },
                tabBarIndicatorStyle: { backgroundColor: '#2E8B57' },
            }}
        >
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Ecommerce" component={EcommerceScreen} />
        </Tab.Navigator>
    );
}