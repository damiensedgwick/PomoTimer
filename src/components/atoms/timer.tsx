import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PomodoroTimer = () => {
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerWatch}>25:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    marginTop: 40,
    marginBottom: 80,
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    borderWidth: 15,
    borderColor: '#1abc9c',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerWatch: {
    padding: 20,
    fontSize: 75,
    textAlign: 'center',
    color: '#2c3e50',
  },
});

export default PomodoroTimer;
