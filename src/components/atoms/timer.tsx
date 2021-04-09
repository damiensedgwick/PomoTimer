import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PomodoroTimer = () => {
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerWatch}>00:00</Text>
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
    borderColor: '#16a085',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerWatch: {
    padding: 20,
    fontSize: 75,
    textAlign: 'center',
    color: '#34495e',
  },
});

export default PomodoroTimer;
