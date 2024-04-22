import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Body, BodySmall, ButtonSmall } from './Typography';

const Macro = ({ macro, percentage, goal }) => {
  const completed = ((percentage / 100) * goal).toFixed(0);

  return (
    <View>
      <AnimatedCircularProgress
        size={100}
        width={10}
        fill={percentage}
        tintColor='#52B175'
        backgroundColor='#f2f2f2'
      >
        {(fill) => (
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <ButtonSmall>{completed ? completed : 0}g</ButtonSmall>
            <BodySmall>of {goal ? goal : 0}g</BodySmall>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
        <Body style={{ color: '#121212' }}>{macro}</Body>
        <BodySmall>{goal ? (goal - completed).toFixed(0) : 0}g left</BodySmall>
      </View>
    </View>
  );
};

export default Macro;
