import React from 'react';
import { View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { BodySmall, ButtonLarge } from './Typography';

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
            <BodySmall>{completed ? completed : 0}g</BodySmall>
            <BodySmall>of {goal ? goal : 0}g</BodySmall>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
        <ButtonLarge>{macro}</ButtonLarge>
        <BodySmall>{goal ? (goal - completed).toFixed(0) : 0}g left</BodySmall>
      </View>
    </View>
  );
};

export default Macro;
