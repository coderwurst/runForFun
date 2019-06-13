import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TimerDisplay extends Component {
    
    constructor(props) {
        super(props);
        const { navigation } = this.props;

        this.state = { 
            totalTraining: navigation.getParam('duration', '00'),
            activeTime: navigation.getParam('active', '00'),
            restTime: navigation.getParam('rest', '00')
        };
    }
    
    runTraining() {
        // TODO 3 second countdown to start & update up
        alert('start training...')

        // TODO active time -> rest time until duration has been met
        for(i = 0; i < this.state.totalTraining; i++) {
            // TODO show 1st active time (nav to Active.js)
            this.loadActive(this.state.activeTime);
            // TODO show 1st rest time (nav to Rest.js)
            //this.loadRest(this.state.restTime);
        }
    }

    loadActive(active){
        this.props.navigation.navigate('ActiveDisplay', { 
            active: active
        });
    }

    loadRest(rest){
        this.props.navigation.navigate('RestDisplay', { 
            rest: rest
        });
    }

    render() {    
        this.runTraining();

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text>Get Ready</Text>
                <Text>{ this.state.totalTraining } countdown </Text>
            </View>
        )
    }
}

export default TimerDisplay;