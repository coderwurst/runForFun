import React, { Component } from 'react';
import { Button, Keyboard, StyleSheet, Text, 
    TextInput, TouchableWithoutFeedback, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import TimerDisplay from './TimerDisplay'

class RunForFun extends Component {    
    
    constructor(props) {
        super(props);
        this.state = { 
            totalTraining: "10",
            activeTime: "2",
            restTime: "1"
        };
    }

    loadTraining() {
        // alert("starting in 3, 2, 1")
        this.props.navigation.navigate('TimerDisplay', {
            /*duration: this.state.totalTraining,
            active: this.state.activeTime,
            rest: this.state.restTime TODO REMOVE DEBUG CODE*/
            duration: 5,
            active: 10000,
            rest: 5000
        });
    }
    
    render() {
        return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text>run for fun!</Text>
                <TextInput  style={styles.TextInput}
                            placeholder="run"
                            onChangeText={(text) => this.setState({
                                totalTraining: this.state.totalTraining,
                                activeTime: text,
                                restTime: this.state.restTime
                            })}
                            accessibilityLabel="How long should your active periods be?"
                            keyboardType="numeric">
                </TextInput>
                <TextInput  style={styles.TextInput}
                            placeholder="rest"
                            onChangeText={(text) => this.setState({
                                totalTraining: this.state.totalTraining,
                                activeTime: this.state.activeTime,
                                restTime: text
                            })}
                            accessibilityLabel="How much rest in between exercises?"
                            keyboardType="numeric">
                </TextInput>
                <TextInput  style={styles.TextInput}
                            placeholder="repeat"
                            onChangeText={(text) => this.setState({
                                totalTraining: text,
                                activeTime: this.state.activeTime,
                                restTime: this.state.restTime
                            })}
                            accessibilityLabel="How long do you want to train in total?"
                            keyboardType="numeric">
                </TextInput>
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
            backgroundColor: '#FFFFFF',
            color: '#E838CE',
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
        TimerDisplay: { screen: TimerDisplay },
    });
    
    export default createAppContainer(AppNavigator);