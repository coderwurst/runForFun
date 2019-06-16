import React, { Component } from 'react';

import ActivityDisplay from './ActivityDisplay'
import { Button, Keyboard, StyleSheet, Text, 
    TextInput, TouchableWithoutFeedback, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

class RunForFun extends Component {    
    
    constructor(props) {
        super(props);
        this.state = { 
            repetitions: "0",
            activeTime: "0",
            restTime: "0",
            inputOptions : [{
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }]
        };
    }

    loadTraining() {
        // alert("starting in 3, 2, 1")
        this.props.navigation.navigate('ActivityDisplay', {
            /*duration: this.state.repetitions,
            active: this.state.activeTime,
            rest: this.state.restTime TODO REMOVE DEBUG CODE*/
            repetitions: 3,
            active: 3000,
            rest: 3000
        });
    }
    
    render() {
        return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text>run for fun!</Text>
                <Dropdown
                    containerStyle={styles.TextInput}
                    label='run'
                    data={this.state.inputOptions}
                    accessibilityLabel="How long should your active periods be?"
                    onChangeText={(value) => this.setState({
                        activeTime: value
                    })}
                />
                <Dropdown
                    containerStyle={styles.TextInput}
                    label='rest'
                    data={this.state.inputOptions}
                    accessibilityLabel="How long should your rest periods be?"
                    onChangeText={(value) => this.setState({
                        restTime: value
                    })}
                />
                <Dropdown
                    containerStyle={styles.TextInput}
                    label='repeat'
                    data={this.state.inputOptions}
                    accessibilityLabel="How long should your program repeat?"
                    onChangeText={(value) => this.setState({
                        repetitions: value
                    })}
                />
                <Button style={styles.Button}
                        title="start" 
                        color="#ffffff"
                        onPress= { () => this.loadTraining() }
                        accessibilityLabel="Start Exercise">
                </Button>
            </View>
        </TouchableWithoutFeedback>
        );
    }
  }

  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#FF623D',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18
        },
        TextInput: {
            margin: 24,
            paddingLeft: 12,
            width: 256,
            height: 50
        },
        Button: {
            backgroundColor: '#E838CE',
            marginTop: 48,
            width: 256,
            height: 50
        }
    });
    
    const AppNavigator = createStackNavigator({
        Dashboard: { screen: RunForFun },
        ActivityDisplay: { screen: ActivityDisplay },
    });
    
    export default createAppContainer(AppNavigator);