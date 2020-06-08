import React from 'react';
import { View, Text, Button } from 'react-native';
import { StateModel } from '../../reducers';
import { setFirstPlayerScore, setSecondPlayerScore } from '../../actions';
import { connect } from 'react-redux';

interface TrackingProps extends StateModel {
    setFirstPlayerScore: Function,
    setSecondPlayerScore: Function
}

export function Tracking({ firstPlayer, secondPlayer, setSecondPlayerScore, setFirstPlayerScore }: TrackingProps) {
    function resetWins() {
        setFirstPlayerScore(0);
        setSecondPlayerScore(0);
    }

    return (
        <View>
            <View>
                <Text>{firstPlayer.name}</Text>
                <Text>Wins: {firstPlayer.score}</Text>
                <Button
                    title="Add win"
                    onPress={() => setFirstPlayerScore(firstPlayer.score + 1)}
                />
            </View>
            <View>
                <Text>{secondPlayer.name}</Text>
                <Text>Wins: {secondPlayer.score}</Text>
                <Button
                    title="Add win"
                    onPress={() => setSecondPlayerScore(secondPlayer.score + 1)}
                />
            </View>
            <Button
                title="Reset Wins"
                onPress={resetWins}
            />
            <Button
                title="New Game"
                onPress={() => { }}
            />
        </View>
    )
}

const mapStateToProps = (state: StateModel) => {
    console.log(state);
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
