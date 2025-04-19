import { View, Text } from 'react-native'
import { Tabs, Stack } from 'expo-router'
import React from 'react'

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="Home" options={{ headerShown: false }} />
        </Tabs>
    );
}

export default Layout;