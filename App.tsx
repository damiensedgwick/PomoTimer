import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PomodorTimer from './src/components/pomodorTimer';

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Tab.Navigator tabBarOptions={{labelPosition: 'below-icon'}}>
        <Tab.Screen name="Clock" component={PomodorTimer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
