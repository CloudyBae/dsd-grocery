import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Macro = ({ macro, percentage, goal }) => {
  const completed = (percentage / 100) * goal;

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={percentage}
        tintColor="#52B175"
        backgroundColor="#e0e0df">
        {
          (fill) => (
            <Text>
              {completed ? completed : 0}/{goal ? goal : 0}g
            </Text>
          )
        }
      </AnimatedCircularProgress>
      <Text>{macro}</Text>
      <Text>{goal ? (goal - completed) : 0}g left</Text>
    </View>
  );
};

export default Macro;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
});