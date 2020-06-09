import React, { useCallback } from 'react';
import { StateModel } from '../../reducers';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { setFirstPlayerName, setSecondPlayerName } from '../../actions';
import { connect } from 'react-redux';

interface HomeProps extends StateModel {
    navigation: any,
    setFirstPlayerName: Function,
    setSecondPlayerName: Function,
}

export function Home({ navigation, firstPlayer, secondPlayer, setFirstPlayerName, setSecondPlayerName }: HomeProps) {

    /* Reseting player names each time user starts a new game.
       I could've done that in Tracking component, in onPress callback for the "New Game" button, 
       but I wanted to show you that I can use hooks :D
    */
    useFocusEffect(
        useCallback(() => {
            setFirstPlayerName('');
            setSecondPlayerName('');
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer} >
                <Text>Player 1 name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter first player's name"
                    value={firstPlayer.name}
                    onChangeText={(text: string) => setFirstPlayerName(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Player 2 name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter first player's name"
                    value={secondPlayer.name}
                    onChangeText={(text: string) => setSecondPlayerName(text)}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tracking')} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        fontSize: 18
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});

const mapStateToProps = (state: StateModel) => {
    return {
        firstPlayer: state.firstPlayer,
        secondPlayer: state.secondPlayer
    }
}

const mapDispatchToProps = {
    setFirstPlayerName: setFirstPlayerName,
    setSecondPlayerName: setSecondPlayerName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
