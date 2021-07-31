import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from './src/constants/colors';

import PomodorTimer from './src/components/pomodorTimer';

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.defaultGreen,
          inactiveTintColor: colors.defaultGrey,
        }}>
        <Tab.Screen
          name="Clock"
          component={PomodorTimer}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="timer-outline" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={PomodorTimer}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="list-outline" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={PomodorTimer}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="cog-outline" size={32} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
