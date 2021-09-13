import React from 'react';
import { SongsList } from '../index';

import * as S from './styled';

const SongsContainer = () => (
  <S.Wrapper>
    <S.Title>List of songs</S.Title>
    <S.WrapperSongs>
      <SongsList id="1" songUrl="https://genius.com/Kendrick-lamar-humble-lyrics" title="HUMBLE." />
    </S.WrapperSongs>
  </S.Wrapper>
);

export default SongsContainer;
