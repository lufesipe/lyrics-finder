import React from 'react';
import { Lyrics } from '../index';

import * as S from './styled';

const LyricsContainer = () => (
  <S.Wrapper>
    <S.WrapperLyrics>
      <Lyrics />
    </S.WrapperLyrics>
  </S.Wrapper>
);

export default LyricsContainer;
