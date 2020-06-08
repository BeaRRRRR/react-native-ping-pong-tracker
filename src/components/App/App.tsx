import React from 'react';

import { Provider } from 'react-redux';
import store from '../../store';

import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../pages/Home';
import TrackingScreen from '../../pages/Tracking';

const stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <stack.Navigator initialRouteName="Home">
                    <stack.Screen name="Home" component={HomeScreen} />
                    <stack.Screen name="Tracking" component={TrackingScreen} />
                </stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
