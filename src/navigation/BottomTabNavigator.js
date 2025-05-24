import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CommHomeScreen from '../screens/community/CommHomeScreen';
import Community from '../screens/community/Community';
import CommPostScreen from '../screens/community/CommPostScreen';
import EcommHome from '../screens/ecommerce/EcommHome';
import EcommStore from '../screens/ecommerce/EcommStore';
import EcommWallet from '../screens/ecommerce/EcommWallet';
import ProfileScreen from '../screens/ProfileScreen';
import CommUploadScreen from '../screens/community/CommUploadScreen';
import EcommUploadScreen from '../screens/ecommerce/EcommUploadScreen';

const Tab = createBottomTabNavigator();

export function CommunityBottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Community') iconName = 'people-outline';
                    else if (route.name === 'Upload') iconName = 'cloud-upload-outline';
                    else if (route.name === 'Post') iconName = 'add-circle';
                    else if (route.name === 'Profile') iconName = 'person-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2E8B57',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={CommHomeScreen} />
            <Tab.Screen name="Community" component={Community} />
            <Tab.Screen name="Upload" component={CommUploadScreen} />
            <Tab.Screen name="Post" component={CommPostScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export function EcommerceBottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Shop') iconName = 'cart-outline';
                    else if (route.name === 'Upload') iconName = 'cloud-upload-outline';
                    else if (route.name === 'Wallet') iconName = 'wallet-outline';
                    else if (route.name === 'Profile') iconName = 'person-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2E8B57',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={EcommHome} />
            <Tab.Screen name="Shop" component={EcommStore} />
            <Tab.Screen name="Upload" component={EcommUploadScreen} />
            <Tab.Screen name="Wallet" component={EcommWallet} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}