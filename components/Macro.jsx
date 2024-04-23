import React from 'react';
import { View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Body, BodySmall, ButtonSmall } from './Typography';

const Macro = ({ macro, percentage, goal }) => {
  const completed = ((percentage / 100) * goal).toFixed(1);
  const remaining = (goal - completed).toFixed(1);
  const unit = goal > 999 ? 'kg' : 'g';

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
            <ButtonSmall>{isNaN(completed) ? 0 : completed}</ButtonSmall>
            <BodySmall>
              of {goal || 0}
              {unit}
            </BodySmall>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
        <Body style={{ color: 'black' }}>{macro}</Body>
        <BodySmall>
          {remaining > 0 ? `${remaining}g left` : 'Goal Achieved!'}
        </BodySmall>
      </View>
    </View>
  );
};

export default Macro;
