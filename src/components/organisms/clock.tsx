import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useMachine} from '@xstate/react';

import {pomodoroMachine} from '../../machines/pomodorMachine';
import {Timer} from '../atoms';
import {Controls} from '../molecules';

const Clock = () => {
  const [current, send] = useMachine(pomodoroMachine);

  const handlePlayPress = () => {
    if (current.matches('timer_started')) {
      send('PAUSE_TIMER');
    } else {
      send('START_TIMER');
    }
  };

  const handleStopPress = () => {
    Alert.alert('Stop Pressed');
  };

  const handleResetPress = () => {
    Alert.alert('Reset Pressed');
  };

  return (
    <View>
      <Timer isRunning={current.matches('timer_started')} />
      <Controls
        current={current}
        handlePlayPress={handlePlayPress}
        handleStopPress={handleStopPress}
        handleResetPress={handleResetPress}
      />
    </View>
  );
};

export default Clock;
