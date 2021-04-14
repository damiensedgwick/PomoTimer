import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMachine} from '@xstate/react';
import {pomodoroMachine} from '../machines/pomodorMachine';

const PomodorTimer = () => {
  const [current, send] = useMachine(pomodoroMachine);
  const timerIsActive = current.matches('active');
  // const [minutes, setMinutes] = useState(25);
  // const [seconds, setSeconds] = useState(0);

  const minutes = current.context.minutes;
  const seconds = current.context.seconds;

  console.log(current.value);

  return (
    <View>
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
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          onPress={() => {
            send('RESTART');
          }}>
          <Text>
            <Icon name="refresh-outline" size={30} color="#95a5a6" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            send('TOGGLE');
          }}>
          <Text>
            <Icon
              name={timerIsActive ? 'pause-outline' : 'play-outline'}
              size={50}
              color="#1abc9c"
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            send('STOP');
          }}>
          <Text>
            <Icon name="stop-outline" size={30} color="#e74c3c" />
          </Text>
        </TouchableOpacity>
      </View>
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
  controlsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default PomodorTimer;
