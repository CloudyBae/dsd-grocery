import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flexDirection: row;
  width: 100%;
  justifyContent: space-between;
  borderTopWidth: 1px;
  borderBottomWidth: 1px ;
  borderColor: #E2E2E2;
  padding: 10px;
  gap: 8px;
`;

export const FlexRow = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
`;

export const FlexColumn = styled.View`
  display: flex;
  flexDirection: column;
  alignItems: center;
  justifyContent: space-between;
`;
