import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flexdirection: row;
  width: 100%;
  justifycontent: space-between;
  bordertopwidth: 1px;
  borderbottomwidth: 1px;
  bordercolor: #e2e2e2;
  padding: 10px;
  gap: 8px;
`;

export const FlexRow = styled.View`
  display: flex;
  flexdirection: row;
  alignitems: center;
  justifycontent: space-between;
`;

export const FlexColumn = styled.View`
  display: flex;
  flexdirection: column;
  alignitems: center;
  justifycontent: space-between;
`;
