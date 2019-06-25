import React, { Component } from 'react';
import { Image, Text, Vibration, View } from 'react-native';

class ActivityDisplay extends Component {
    
    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const minToMillis = 60000;
        // const minToMillis = 600;

        this.state = { 
            repetitions: navigation.getParam('repetitions', '00'),
            activeTime: navigation.getParam('active', '00') * minToMillis,
            restTime: navigation.getParam('rest', '00') * minToMillis,
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
        if(this.state.repeats <= this.state.repetitions) {
            console.log(`turn: ${this.state.repeats}`)
            this.runActive();
        } else {
            this.props.navigation.navigate('Dashboard');
        }
    }

    render() {   
        let icon = this.state.active ? 
                    require('./fitness.png') : 
                    require('./battery-charging.png')  
        return (
            <View style={ this.state.active ? ({ flex: 1, alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#BDFF57' }) : ({ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1D4ECC'})} >
                <Text style={{ marginBottom: 24 }}>{this.state.active ? 'Active' : 'Rest'}</Text>
                <Image source={icon} style={{ width: 256, height: 256, resizeMode: 'contain' }}/>
            </View>
        )
    }
}

export default ActivityDisplay;