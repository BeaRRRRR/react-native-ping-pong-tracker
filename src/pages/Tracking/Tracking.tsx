import React, { FC } from 'react';
import { connect } from 'react-redux';

import { RootStackParamList } from '../../types';

import { StateModel } from '../../reducers';
import { setFirstPlayerScore, setSecondPlayerScore } from '../../actions';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type TrackingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tracking'>

interface TrackingProps extends StateModel {
    navigation: TrackingScreenNavigationProp,
    setFirstPlayerScore: (firstPlayerScore: number) => void,
    setSecondPlayerScore: (secondPlayerScore: number) => void
}

const Tracking: FC<TrackingProps> = ({ navigation, firstPlayer, secondPlayer, setSecondPlayerScore, setFirstPlayerScore }: TrackingProps) => {

    function resetWins() {
        setFirstPlayerScore(0);
        setSecondPlayerScore(0);
    }

    return (
        <View style={styles.container}>
            <View style={styles.playerContainer}>
                <Text style={styles.playerName}>{firstPlayer.name}</Text>
                <View style={styles.winsContainer}>
                    <Text style={styles.winsCount}>Wins: {firstPlayer.score}</Text>
                    <View style={styles.winButtonContainer}>
                        <TouchableOpacity
                            onPress={() => setFirstPlayerScore(firstPlayer.score + 1)}
                            style={styles.addWinButton}
                        >
                            <Text style={styles.buttonText}>
                                +
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setFirstPlayerScore(firstPlayer.score - 1)}
                            style={styles.removeWinButton}
                        >
                            <Text style={styles.buttonText}>
                                -
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.playerContainer}>
                <Text style={styles.playerName}>{secondPlayer.name}</Text>
                <View style={styles.winsContainer}>
                    <Text style={styles.winsCount}>Wins: {secondPlayer.score}</Text>
                    <View style={styles.winButtonContainer}>
                        <TouchableOpacity
                            onPress={() => setSecondPlayerScore(secondPlayer.score + 1)}
                            style={styles.addWinButton}
                        >
                            <Text style={styles.buttonText}>
                                +
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSecondPlayerScore(secondPlayer.score - 1)}
                            style={styles.removeWinButton}
                        >
                            <Text style={styles.buttonText}>
                                -
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={{ ...styles.button, marginRight: 15, backgroundColor: 'red' }}
                    onPress={resetWins}
                >
                    <Text style={styles.buttonText}>
                        Reset Wins
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>
                        New Game
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginRight: 30,
        marginLeft: 30,
    },
    playerContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    playerName: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
    },
    winsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    winsCount: {
        fontSize: 26
    },
    buttonsContainer: {
        marginTop: 100,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'rgb(0, 0, 255)',
        padding: 20,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    winButtonContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    addWinButton: {
        backgroundColor: 'rgb(0, 0, 255)',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 14,
        paddingLeft: 14,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    removeWinButton: {
        backgroundColor: 'red',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 14,
        paddingLeft: 14,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
})

const mapStateToProps = (state: StateModel) => {
    return {
        firstPlayer: state.firstPlayer,
        secondPlayer: state.secondPlayer
    }
}

const mapDispatchToProps = {
    setFirstPlayerScore: setFirstPlayerScore,
    setSecondPlayerScore: setSecondPlayerScore,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);
