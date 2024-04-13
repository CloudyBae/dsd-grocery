import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchItem from './SearchItem';

describe('SearchItem component', () => {
  const mockItem = {
    image: 'https://example.com/image.jpg',
    title: 'Test Item',
    prepTime: '30 min',
    type: 'Food',
    price: '$10',
  };

  test('renders with correct data', () => {
    const { getByText, getByLabelText } = render(<SearchItem {...mockItem} />);
    
    expect(getByText('Test Item')).toBeTruthy();
    expect(getByText('30 min')).toBeTruthy();
    expect(getByLabelText('Close button')).toBeTruthy();
  });

  test('calls onClick handler when close button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByLabelText } = render(<SearchItem {...mockItem} onClose={onClickMock} />);
    const closeButton = getByLabelText('Close button');
    
    fireEvent.press(closeButton);

    expect(onClickMock).toHaveBeenCalled();
  });
});
