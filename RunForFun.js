import React, { Component } from 'react';

import ActivityDisplay from './ActivityDisplay'
import { Button, Keyboard, Text, 
    TouchableWithoutFeedback, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

import styles from './styles';

class RunForFun extends Component {    
    
    constructor(props) {
        super(props);
        this.state = { 
            repetitions: "0",
            activeTime: "0",
            restTime: "0",
            inputOptions : [{
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }]
        };
    }

    loadTraining() {
        this.props.navigation.navigate('ActivityDisplay', {
            duration: this.state.repetitions,
            active: this.state.activeTime,
            rest: this.state.restTime
        });
    }
    
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Text style={styles.Title}>run for fun!</Text>
                    <Dropdown
                        containerStyle={styles.TextInput}
                        label='run'
                        data={this.state.inputOptions}
                        accessibilityLabel="How long should your active periods be?"
                        onChangeText={(value) => this.setState({
                            activeTime: value
                        })}
                    />
                    <Dropdown
                        containerStyle={styles.TextInput}
                        label='rest'
                        data={this.state.inputOptions}
                        accessibilityLabel="How long should your rest periods be?"
                        onChangeText={(value) => this.setState({
                            restTime: value
                        })}
                    />
                    <Dropdown
                        containerStyle={styles.TextInput}
                        label='repeat'
                        data={this.state.inputOptions}
                        accessibilityLabel="How long should your program repeat?"
                        onChangeText={(value) => this.setState({
                            repetitions: value
                        })}
                    />
                    <Button style={styles.Button}
                            title="start" 
                            color="#ffffff"
                            onPress= { () => this.loadTraining() }
                            accessibilityLabel="Start Exercise">
                    </Button>
                </View>
            </TouchableWithoutFeedback>
            );
        }
    }

    const AppNavigator = createStackNavigator({
        Dashboard: { screen: RunForFun },
        ActivityDisplay: { screen: ActivityDisplay },
    });
    
    export default createAppContainer(AppNavigator);