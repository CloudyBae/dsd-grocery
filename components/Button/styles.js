import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  min-height: ${(props) => (props.size === 'small' ? '20px' : '45px')};
  min-width: ${(props) => (props.size === 'small' ? '20px' : '45px')};
  width: 100%;
  justify-content: space-between;
  padding: ${(props) => (props.size === 'small' ? '5px 10px' : '15px 15px')};
  border-radius: ${(props) => (props.shape === 'rounded' ? '18px' : '5px')};
  border: ${(props) =>
    props.kind === 'outline' ? '1px solid #E2E2E2' : 'none'};
  background-color: ${(props) => {
    switch (props.kind) {
      case 'primary':
        return '#53B175';
      case 'secondary':
        return '#6c757d';
      case 'ghost':
        return 'transparent';
      case 'outline':
        return 'transparent';
      default:
        return '#007bff';
    }
  }};
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
`;

export const ButtonText = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => {
    switch (props.kind) {
      case 'outline':
        return '#181725';
      case 'ghost':
        return '#181725';
      default:
        return props.disabled ? '#666666' : '#ffffff';
    }
  }};
  font-size: ${(props) => props.fontSize || '16px'};
`;

export const Enhancer = styled.Text`
  color: ${(props) => props.color || '#ffffff'};
  background-color: ${(props) => props.secondaryColor || '#FFFFFF26'};
  padding: 2px 5px;
  border-radius: 4px;
`;
