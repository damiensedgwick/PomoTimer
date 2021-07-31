import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMachine} from '@xstate/react';
import {pomodoroMachine} from '../machines/pomodorMachine';
import {colors} from '../constants/colors';

const PomodorTimer = () => {
  const [current, send] = useMachine(pomodoroMachine);
  const timerIsActive = current.matches('active');
  const [minutes, setMinutes] = useState(current.context.initialMinutes);
  const [seconds, setSeconds] = useState(current.context.initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timerIsActive) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            send('STOP');
            clearInterval(myInterval);
            setMinutes(current.context.initialMinutes);
            setSeconds(current.context.initialSeconds);
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
    <View style={styles.sectionContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerWatch}>
          {minutes === 0 && seconds === 0 ? null : (
            <Text>
              {' '}
              {minutes < 1 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          )}
        </Text>
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          onPress={() => {
            send('RESTART');
            setMinutes(current.context.initialMinutes);
            setSeconds(current.context.initialSeconds);
          }}>
          <Text>
            <Icon name="refresh-outline" size={40} color={colors.defaultGrey} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            send('TOGGLE');
          }}>
          <Text>
            <Icon
              name={timerIsActive ? 'pause-outline' : 'play-outline'}
              size={80}
              color={colors.defaultGreen}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            send('STOP');
            setMinutes(current.context.initialMinutes);
            setSeconds(current.context.initialSeconds);
          }}>
          <Text>
            <Icon name="stop-outline" size={40} color={colors.defaultRed} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {},
  timerContainer: {
    marginTop: 56,
    marginBottom: 56,
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
    fontSize: 75,
    textAlign: 'center',
    color: '#2c3e50',
  },
  controlsContainer: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default PomodorTimer;
