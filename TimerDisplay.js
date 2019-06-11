import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TimerDisplay extends Component {
    
    constructor(props) {
        super(props);
    }
    
    runTraining() {
        // TODO 3 second countdown to start

        // TODO show 1st active time

        // TODO show 1st rest time

        // TODO active time -> rest time until duration has been met
    }

    render() {
        const { navigation } = this.props;
        const duration = navigation.getParam('duration', '00');
        const active = navigation.getParam('active', '00');
        const rest = navigation.getParam('rest', '00');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text>Get Ready</Text>
                <Text>{ duration } countdown </Text>
            </View>
        )
    }
}

export default TimerDisplay;