import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';

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
