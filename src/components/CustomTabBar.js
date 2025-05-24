import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
                justifyContent: 'space-between', // Changed to space-between for left and center alignment
            }}
        >
            {/* Drawer Icon */}
            <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{
                    padding: 6,
                }}
            >
                <Text style={{ fontSize: 24, color: '#000' }}>
                    <Ionicons name="menu" size={28} color="#000" />
                </Text>
            </TouchableOpacity>

            {/* Existing Tab Bar */}
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#f1f1f1',
                    borderRadius: 999,
                    gap: 15,
                    flex: 1, // Allow tab bar to take available space
                    justifyContent: 'center', // Center the tabs within this View
                    marginHorizontal: 10, // Add some margin to avoid touching edges
                }}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            onPress={onPress}
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 25,
                                borderRadius: 999,
                                backgroundColor: isFocused ? '#2E8B57' : '#fff',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ color: isFocused ? '#fff' : '#000', fontWeight: 'bold' }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

        </View>
    );
}