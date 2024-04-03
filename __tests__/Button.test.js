import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../components/Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Button id="test-button">Click me</Button>);
    const button = getByTestId('test-button');
    expect(button).toBeDefined();
  });

  it('calls onPress handler when clicked', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button id="test-button" onPress={onPressMock}>
        Click me
      </Button>
    );
    const button = getByTestId('test-button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

});
