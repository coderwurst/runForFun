import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Rest extends Component {
    
    componentDidMount() {
        Vibration.vibrate([800,800,800]);
        // send sound
        setTimeout(
            () => {
                this.props.navigation.navigate('Dashboard');
            },
            10000
        )
    }
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }} >
                { this.runRestPeriod() }
                <Text>Rest</Text>
                <Text>Icon</Text>
            </View>
       )
    }
}

export default Rest;
