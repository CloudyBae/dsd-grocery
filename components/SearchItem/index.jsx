import React from 'react';
import { Image, Pressable } from 'react-native';
import {
  Caption,
  ButtonLarge,
} from '../Typography';
import { EvilIcons } from '@expo/vector-icons';
import { Container, FlexRow, FlexColumn } from './styles';

const SearchItem = ({ image, title, prepTime }) => {
  return (
    <Container>
      <FlexRow style={{ gap: '8px' }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 9,
            resizeMode: 'cover',
          }}
          source={{
            uri: image,
          }}
          accessibilityRole='image'
          accessibilityLabel={title}
        />
        <FlexColumn
          style={{
            height: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <ButtonLarge>{title}</ButtonLarge>
          <FlexRow>
            <EvilIcons name={'clock'} size={24} color='#121212' />
            <Caption>{prepTime}</Caption>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
      <Pressable
        accessibilityRole='button'
        accessibilityLabel='Close button'
        onClick={() => console.log('close')}
      >
        <EvilIcons name={'close'} size={24} color='#B3B3B3' />
      </Pressable>
    </Container>
  );
};

export default SearchItem;
