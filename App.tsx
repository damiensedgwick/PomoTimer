import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import PomodorTimer from './src/components/pomodorTimer';

export const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <StatusBar barStyle="default" />
      <PomodorTimer />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
