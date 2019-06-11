import React, { Component } from 'react';
import CountDown from 'react-native-countdown-component';

class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            id: 'test',
            ref: 'test',
            until: this.props.time,
            onFinish: this.props.onFinish,
            onPress: this.props.onPress,
            running: this.props.running
        };
    }
    
    render() {
        return (
            <CountDown
                {...this.props}
                size={ 20 }
                timeToShow={ ['M','S'] }
            />
        )
    }
}

export default Timer;