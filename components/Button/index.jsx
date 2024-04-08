import React from 'react';
import { ButtonContainer, Enhancer } from './styles';
import { ActivityIndicator } from 'react-native';
import { ButtonText } from '../Typography';

const Button = ({
  id,
  children,
  startEnhancer,
  endEnhancer,
  onPress,
  isFullWidth,
  disabled = false,
  isLoading = false,
  kind = 'primary',
  size = 'default',
  shape = 'rounded',
  accessibilityLabel,
}) => {
  return (
    <ButtonContainer
      testID={id}
      onPress={onPress}
      isFullWidth={isFullWidth}
      accessibilityLabel={accessibilityLabel}
      kind={kind}
      shape={shape}
      size={size}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator color='#ffffff' />
      ) : (
        <>
          {startEnhancer && <Enhancer>{startEnhancer}</Enhancer>}
          {children && <ButtonText style={{
            color: kind === 'primary' ? '#ffffff' : '#000000',
          }} kind={kind}>{children}</ButtonText>}
          {endEnhancer && <Enhancer>{endEnhancer}</Enhancer>}
        </>
      )}
    </ButtonContainer>
  );
};

export default Button;
