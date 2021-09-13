import styled from 'styled-components';

export const WrapperLayout = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  padding: 10px 20px;
`;
