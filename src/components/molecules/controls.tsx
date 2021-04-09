import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Controls = () => {
  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => Alert.alert('Reset Pressed')}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => Alert.alert('Start Pressed')}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.stopButton}
        onPress={() => Alert.alert('Stop Pressed')}>
        <Text>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  resetButton: {},
  startButton: {},
  stopButton: {},
});

export default Controls;
