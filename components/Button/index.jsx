import React from 'react';
import { ButtonContainer, Enhancer } from './styles';
import { ActivityIndicator, View } from 'react-native';
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
  style,
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
      style={style}
    >
      {isLoading ? (
        <ActivityIndicator color='#ffffff' />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {startEnhancer && <Enhancer>{startEnhancer}</Enhancer>}
          {children && (
            <ButtonText
              style={{
                color: kind === 'primary' ? '#ffffff' : '#000000',
              }}
              kind={kind}
            >
              {children}
            </ButtonText>
          )}
          {endEnhancer && <Enhancer>{endEnhancer}</Enhancer>}
        </View>
      )}
    </ButtonContainer>
  );
};

export default Button;
