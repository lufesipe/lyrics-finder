import React from 'react';

import * as S from './styled';

const SongCard = () => (
  <S.Wrapper>
    <S.AlbumCover
      src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F483306c535608c27f9e3781b854dc91d.1000x1000x1.png"
      alt="Album cover"
    />
    <S.Title>Song title</S.Title>
  </S.Wrapper>
);

export default SongCard;
