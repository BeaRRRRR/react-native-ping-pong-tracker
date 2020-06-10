import 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from 'react-native-testing-library';

import App from '../src/components/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<App/>);
});


// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Testing react navigation', () => {
    it('player names are saved to tracking screen', async () => {
        const component = (
                <App />
        );

        const { findByPlaceholder, findByText } = render(component);

        const homeHeader = await findByText('Home');
        const firstPlayerNameInput = await findByPlaceholder(`Enter first player's name`);
        const secondPlayerNameInput = await findByPlaceholder(`Enter second player's name`);
        const continueButton = await findByText('Continue');

        expect(homeHeader).toBeTruthy();
        expect(firstPlayerNameInput).toBeTruthy();
        expect(secondPlayerNameInput).toBeTruthy();

        fireEvent.changeText(firstPlayerNameInput, 'John');
        fireEvent.changeText(secondPlayerNameInput, 'Sam');
        fireEvent.press(continueButton)

        const trackingHeader = findByText('Tracking');
        const firstPlayerName = findByText('John');
        const secondPlayerName = findByText('Sam');

        expect(trackingHeader).toBeTruthy();
        expect(firstPlayerName).toBeTruthy();
        expect(secondPlayerName).toBeTruthy();

    });
});
