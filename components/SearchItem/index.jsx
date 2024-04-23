import React from 'react';
import { Image, Pressable } from 'react-native';
import { ButtonLarge, Caption } from '../Typography';
import { EvilIcons } from '@expo/vector-icons';
import { Container, FlexRow, FlexColumn } from './styles';

const SearchItem = ({ image, title, prepTime, type, price }) => {
  return (
    <Container>
      <FlexRow style={{ gap: '8px' }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
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
            gap: '6px',
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
