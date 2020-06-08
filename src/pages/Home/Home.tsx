import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { setFirstPlayerName, setSecondPlayerName } from '../../actions';
import { connect } from 'react-redux';

interface HomeProps {
    navigation: any,
    setFirstPlayerName: Function,
    setSecondPlayerName: Function,
}

export function Home({ navigation, setFirstPlayerName, setSecondPlayerName }: HomeProps) {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer} >
                <Text>Players 1 name</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter first player's name"
                    defaultValue={""}
                    onChangeText={(text: string) => setFirstPlayerName(text)}
                />
            </View>
            <View>
                <Text>Players 1 name</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter first player's name"
                    defaultValue={""}
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

const mapDispatchToProps = {
    setFirstPlayerName: setFirstPlayerName,
    setSecondPlayerName: setSecondPlayerName,
}

export default connect(null, mapDispatchToProps)(Home);
