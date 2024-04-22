import React from 'react';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Title } from '../Typography';

const colorMappings = {
  '#FFF6ED': '#D9C1B6',
  '#FEF9E4': '#E0D9B1',
  '#FDE9E4': '#D3A29D',
  '#ECF6FD': '#A1C8F5',
  '#F4EBF7': '#C7AAD1',
};

const alternatingColors = css`
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
`;

const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f2f2f2;
  border-radius: 18px;
  width: 175px;
  min-height: 170px;
  max-width: 175px;
  ${alternatingColors}
`;

const Title = styled.Text`
  text-align: center;
`;

const getRandomColorPair = () => {
  const keys = Object.keys(colorMappings);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return {
    backgroundColor: randomKey,
    borderColor: colorMappings[randomKey],
  };
};

const CategoryCard = ({ id, image, title }) => {
  const { backgroundColor, borderColor } = getRandomColorPair();

  return (
    <CardContainer
      testID={id}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'stretch',
        }}
        source={{
          uri: image,
        }}
      />
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default CategoryCard;
