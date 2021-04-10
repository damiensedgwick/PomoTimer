import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Controls = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity onPress={() => Alert.alert('Reset Pressed')}>
        <Text>
          <Icon name="refresh-outline" size={30} color="#4F8EF7" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsRunning(!isRunning)}>
        <Text>
          <Icon
            name={isRunning ? 'pause-outline' : 'play-outline'}
            size={50}
            color="#1abc9c"
          />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Stop Pressed')}>
        <Text>
          <Icon name="stop-outline" size={30} color="#e74c3c" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Controls;
