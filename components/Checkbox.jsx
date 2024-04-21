import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { Title, Body, BodySmall, Caption, ButtonLarge, ButtonText, ButtonSmall } from './Typography';

const Checkbox = ({ label, isChecked }) => {
  return (
    <CheckBox
      title={label}
      checked={isChecked}
      checkedColor='#52B175'
      fontFamily='Gilroy-Regular'
    />
  );
};

export default Checkbox;
