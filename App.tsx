import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Clock} from './src/components/organisms';

export const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <Clock />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
