import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopTabNavigator from './TopTabNavigator';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen
                name="Socioglamm"
                component={TopTabNavigator}
                options={{
                    drawerLabel: () => null, // 👈 Hides the drawer label
                    title: '', // Optional: Hides title on header if header is shown
                }}
            />
        </Drawer.Navigator>
    );
}
