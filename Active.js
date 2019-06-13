import React, { Component } from 'react';
import { Text, Vibration,View } from 'react-native';

class Active extends Component {
    
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'green' }} >
                <Text>Active</Text>
                <Text>Icon</Text>
            </View>
       )
    }
}

export default Active;
