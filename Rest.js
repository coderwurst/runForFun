import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Rest extends Component {
    
    runRestPeriod() {
        // send vibration and audio to alert
        alert('3, 2, 1...')
        Vibration.vibrate([800,800,800]);
        // start timer
    }
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }} >
                <Text>Rest</Text>
                <Text>Icon</Text>
            </View>
       )
    }
}

export default Rest;
