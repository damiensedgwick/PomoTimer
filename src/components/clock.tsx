import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useMachine} from '@xstate/react';

import {pomodoroMachine} from '../machines/pomodorMachine';
import Timer from './timer';
import Controls from './controls';

const Clock = () => {
  const [current, send] = useMachine(pomodoroMachine);

  const handlePlayPress = () => {
    if (current.matches('running')) {
      send('PAUSE');
    } else {
      send('START');
    }
  };

  const handleStopPress = () => {
    Alert.alert('Stop Pressed');
  };

  const handleResetPress = () => {
    Alert.alert('Reset Pressed');
  };

  console.log(current.value);

  return (
    <View>
      <Timer isRunning={current.matches('running')} />
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
