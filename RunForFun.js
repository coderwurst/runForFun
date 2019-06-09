import React, { Component } from 'react';
import { Button, Keyboard, StyleSheet, Text, 
    TextInput, TouchableWithoutFeedback, View } from 'react-native';

class RunForFun extends Component {    
    
    constructor(props) {
        super(props);
        this.state = { 
            totalTraining: "10",
            activeTime: "2",
            restTime: "1"
        };
    }

    startTraining() {
        // 10 second countdown to start

        // start 1st active time

        // notify of rest time

        // active time -> rest time etc.
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
                        color="#FFFFFF"
                        onPress= { this.startTraining }
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
      backgroundColor: '#FF4B89',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18
    },
    TextInput: {
      backgroundColor: '#FFFFFF',
      color: '#DA3DFF',
      margin: 24,
      paddingLeft: 12,
      width: 256,
      height: 50
    },
    Button: {
      backgroundColor: '#FF803D',
      marginTop: 48,
      width: 256,
      height: 50
    }
  });

  export default RunForFun