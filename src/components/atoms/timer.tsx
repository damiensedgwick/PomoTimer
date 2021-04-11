import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

interface Props {
  isRunning: boolean;
  isReset: boolean;
  isStopped: boolean;
}

const PomodoroTimer = ({isRunning, isReset, isStopped}: Props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);

  useEffect(() => {
    if (isReset) {
      Alert.alert('Reset True');
    }

    let myInterval = setInterval(() => {
      if (isRunning) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerWatch}>
        {minutes === 0 && seconds === 0 ? null : (
          <Text>
            {' '}
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        )}
      </Text>
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
