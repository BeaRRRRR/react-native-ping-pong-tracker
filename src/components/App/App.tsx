import React, { FC } from 'react';

import { RootStackParamList } from '../../types';

import { Provider } from 'react-redux';
import store from '../../store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../pages/Home';
import TrackingScreen from '../../pages/Tracking';

const stack = createStackNavigator<RootStackParamList>();

// FC stands for Functional Component
const App: FC = () => {
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

export default App;
