import styled from 'styled-components';

export const WrapperLayout = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  padding: 10px 20px;
`;
