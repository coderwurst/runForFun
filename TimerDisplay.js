import React, { Component } from 'react';
import { Text, Vibration, View } from 'react-native';

class TimerDisplay extends Component {
    
    constructor(props) {
        super(props);

        const { navigation } = this.props;
        this.state = { 
            totalTraining: navigation.getParam('duration', '00'),
            activeTime: navigation.getParam('active', '00'),
            restTime: navigation.getParam('rest', '00'),
            active: true,
            repeats: 0
        };
    }
    
    componentDidMount() {
        this.runActive();
    }


    runActive() {
        // Vibration.vibrate([800,800,800]);
        // TODO send sound
        console.log("active started")
        setTimeout(() => {
            this.setState({
                active: false,
                repeats: this.state.repeats
            });
            console.log("active complete")
            this.takeRest();
        }, this.state.activeTime );
    }

    takeRest() {
        // Vibration.vibrate([800,800,800]);
        // TODO send sound
        console.log("rest started")
        setTimeout(() => {
            this.setState({
                active: true,
                repeats: this.state.repeats + 1
            });
            console.log(this.state)
            console.log("rest complete")
            this.continueTraining();
        }, this.state.restTime);
    }

    continueTraining() {
        // TODO active time -> rest time until duration has been met
        if(this.state.repeats <= this.state.totalTraining) {
            console.log(`turn: ${this.state.repeats}`)
            this.runActive();
        } else {
            this.props.navigation.navigate('Dashboard');
        }
    }

    render() {    
        return (
            <View style={ this.state.active ? ({ flex: 1, alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'green' }) : ({ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'})} >
                <Text>{this.state.active ? 'Active' : 'Rest'}</Text>
                <Text>Icon</Text>
            </View>
        )
    }
}

export default TimerDisplay;