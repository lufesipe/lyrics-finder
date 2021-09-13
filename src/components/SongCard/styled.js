import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  max-height: 99px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const AlbumCover = styled.img`
  width: 80px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
