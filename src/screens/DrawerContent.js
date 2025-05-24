import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function DrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ padding: 20 }}>
                <Text>Drawer Menu</Text>
            </View>
            <DrawerItemList {...props} />
            <Button title="Close Drawer" onPress={() => props.navigation.closeDrawer()} />
        </DrawerContentScrollView>
    );
}