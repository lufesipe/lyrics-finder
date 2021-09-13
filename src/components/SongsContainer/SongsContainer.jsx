import React from 'react';
import { SongsList } from '../index';

import * as S from './styled';

const SongsContainer = () => (
  <S.Wrapper>
    <S.Title>ALL SONGS</S.Title>
    <S.WrapperSongs>
      <SongsList
        songId="1"
        songUrl="https://genius.com/Kendrick-lamar-humble-lyrics"
        title="HUMBLE."
      />
    </S.WrapperSongs>
  </S.Wrapper>
);

export default SongsContainer;
