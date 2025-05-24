// TopTabNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/community/CommunityScreen';
import EcommerceScreen from '../screens/ecommerce/EcommerceScreen';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Ecommerce" component={EcommerceScreen} />
        </Tab.Navigator>
    );
}
