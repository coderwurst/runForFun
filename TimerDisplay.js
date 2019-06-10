import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TimerDisplay extends Component {
    
    constructor(props) {
        super(props);
    }

    runTraining() {
        // TODO 3 second countdown to start

        // TODO start 1st active time

        // TODO notify of rest time

        // TODO active time -> rest time etc.
    }
    
    render() {
        const { navigation } = this.props;
        const duration = navigation.getParam('duration', 'no duration');
        const active = navigation.getParam('active', 'no active');
        const rest = navigation.getParam('rest', 'no rest');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text>Hello from the Timer</Text>
                <Text>Duration: { JSON.stringify(duration) }</Text>
                <Text>Active: { JSON.stringify(active) }</Text>
                <Text>Rest: { JSON.stringify(rest) }</Text>
            </View>
        )
    }
}

export default TimerDisplay;