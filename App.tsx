import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Clock} from './src/components/organisms';

export const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <StatusBar barStyle="default" />
      <Clock />
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
