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
        this.props.navigation.navigate('TimerDisplay');
    }
    
    render() {
        return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text>run for fun!</Text>
                <TextInput  style={styles.TextInput}
                            placeholder="Training Time"
                            onChangeText={(text) => this.setState({
                                totalTraining: text,
                                activeTime: this.state.activeTime,
                                restTime: this.state.restTime
                            })}
                            accessibilityLabel="How long do you want to train in total?"
                            keyboardType="numeric">
                </TextInput>
                <TextInput  style={styles.TextInput}
                            placeholder="Active Time"
                            onChangeText={(text) => this.setState({
                                totalTraining: this.state.totalTraining,
                                activeTime: text,
                                restTime: this.state.restTime
                            })}
                            accessibilityLabel="How long should your active periods be?"
                            keyboardType="numeric">
                </TextInput>
                <TextInput  style={styles.TextInput}
                            placeholder="Rest in between"
                            onChangeText={(text) => this.setState({
                                totalTraining: this.state.totalTraining,
                                activeTime: this.state.activeTime,
                                restTime: text
                            })}
                            accessibilityLabel="How much rest in between exercises?"
                            keyboardType="numeric">
                </TextInput>
                <Button style={styles.Button}
                        title="start" 
                        color="#FF623D"
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
          backgroundColor: '#DA3DFF',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18
        },
        TextInput: {
            backgroundColor: '#E838CE',
            color: '#FF623D',
            margin: 24,
            paddingLeft: 12,
            width: 256,
            height: 50
        },
        Button: {
            backgroundColor: '#FF623D',
            marginTop: 48,
            width: 256,
            height: 50
        }
    });
    
    const AppNavigator = createStackNavigator({
        Dashboard: { screen: RunForFun },
        TimerDisplay: { screen: TimerDisplay }
    });
    
    export default createAppContainer(AppNavigator);