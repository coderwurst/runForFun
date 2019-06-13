import React, { Component } from 'react';
import { Text, Vibration,View } from 'react-native';

class Active extends Component {
    
    runActivePeriod() {
        // send vibration and audio to alert
        alert('3, 2, 1...')
        Vibration.vibrate([800,800,800]);
        // start timer
    }

    componentDidMount() {
        /*let timer = setInterval(this.tick, 3000);
        this.setState({timer});*/
    }

    componentWillUnmount() {
        // this.clearInterval(this.state.timer);
    }
    
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'green' }} >
                { this.runActivePeriod() }
                <Text>Active</Text>
                <Text>Icon</Text>
            </View>
       )
    }
}

export default Active;
