// components/CustomTabBar.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#f1f1f1',
                padding: 4,
                borderRadius: 999,
                margin: 10,
                gap: 15,
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
                            flex: 1,
                            paddingVertical: 10,
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
    );
}
