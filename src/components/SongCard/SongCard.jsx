import React from 'react';

import * as S from './styled';

const SongCard = ({ songUrl, songImageUrl, title }) => (
  <S.Link href={songUrl}>
    <S.Wrapper>
      <S.AlbumCover src={songImageUrl} alt="Album cover" />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  </S.Link>
);

export default SongCard;
