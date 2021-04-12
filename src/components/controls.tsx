import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  current: any;
  handlePlayPress: () => void;
  handleResetPress: () => void;
  handleStopPress: () => void;
}

const Controls = ({
  current,
  handlePlayPress,
  handleResetPress,
  handleStopPress,
}: Props) => {
  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity onPress={handleResetPress}>
        <Text>
          <Icon name="refresh-outline" size={30} color="#95a5a6" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlayPress}>
        <Text>
          <Icon
            name={current.matches('running') ? 'pause-outline' : 'play-outline'}
            size={50}
            color="#1abc9c"
          />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStopPress}>
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
