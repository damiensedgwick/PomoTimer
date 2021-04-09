import React from 'react';
import {View} from 'react-native';

import {Timer} from '../atoms';
import {Controls} from '../molecules';

const Clock = () => {
  return (
    <View>
      <Timer />
      <Controls />
    </View>
  );
};

export default Clock;
