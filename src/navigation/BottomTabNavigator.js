import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
// import CommunityScreen from '../screens/CommunityScreen';
import CommunityPost from '../screens/CommunityPost';

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
                    else if (route.name === 'Wallet') iconName = 'wallet-outline';
                    else if (route.name === 'Profile') iconName = 'person-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2E8B57',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Community" component={CommunityPost} />
            <Tab.Screen name="Upload" component={UploadScreen} />
            <Tab.Screen name="Wallet" component={WalletScreen} />
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
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Upload" component={UploadScreen} />
            <Tab.Screen name="Wallet" component={WalletScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}