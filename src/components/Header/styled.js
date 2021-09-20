import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 650px;
  justify-content: space-between;
  margin-bottom: 20px;

  input {
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 8px;
    width: 100%;
    height: 26px;
    padding-left: 10px;
    font-size: 14px;

    &:nth-child(2) {
      margin-left: 10px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0px 16px;
    border: none;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-weight: bold;
    font-size: 12px;
    transition: 300ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      cursor: pointer;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;

    input {
      width: 268.5px;

      &:nth-child(2) {
        margin-left: 0px;
        margin-top: 10px;
        border-radius: 8px;
      }
    }

    button {
      width: 268.5px;
      border-radius: 8px;
      padding: 0px 16px;
      margin: 0;
      margin-top: 10px;

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        cursor: pointer;
      }
    }
  }
`;
