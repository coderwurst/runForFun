import React, { Component } from 'react';
import CountDown from 'react-native-countdown-component';
import { Text, View } from 'react-native';
import Timer from './CountdownTimer';

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
        const duration = navigation.getParam('duration', '00');
        const active = navigation.getParam('active', '00');
        const rest = navigation.getParam('rest', '00');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text>Total Training Time</Text>
                <CountDown
                    id={ 'duration' }
                    until={ Number(duration) }
                    onFinish={ () => alert('finished') }
                    onPress={ () => alert('hello') }
                    size={ 20 }
                    timeToShow={ ['M','S'] }
                    />
                <Text>Active Time</Text>
                <CountDown
                    id={ 'active' }
                    ref= { 'activeTimer' } 
                    until={ Number(active) }
                    onFinish={ alert('finished') }
                    onPress={ () => alert('hello') }
                    size={ 20 }
                    timeToShow={ ['M','S'] }
                    />
                <Text>Rest Time</Text>
                <CountDown
                    id={ 'rest' }
                    ref={ 'restTimer' }
                    until={ Number(rest) }
                    onFinish={ alert('finished') }
                    onPress={ () => alert('hello') }
                    size={ 20 }
                    timeToShow={ ['M','S'] }
                    running={ false }
                    />
                <Timer
                    id={ 'test' }
                    ref={ 'testTimer' }
                    until={ 15 }
                    onFinish={ alert('finished') }
                    onPress={ () => alert('hello') }
                    running={ true }
                    />
            </View>
        )
    }
}

export default TimerDisplay;