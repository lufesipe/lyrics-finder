import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
`;

export const WrapperArtistProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 25px;
  height: 200px;

  h3 {
    font-weight: bold;
    font-size: 15px;
    padding-top: 8px;
  }
`;

export const WrapperArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtistName = styled.h1`
  font-weight: bold;
  font-size: 26px;
`;

export const ArtistInstagramLink = styled.a`
  text-decoration: none;
  font-size: 13px;
  color: inherit;
  transition: 300ms;
  margin-top: 3px;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const WrapperSongCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 10px;
`;
