import React from 'react';
import useGenius from '../../hooks/genius-hooks';

import * as S from './styled';

const LyricContainer = () => {
  const { geniusState } = useGenius();

  return (
    <S.Wrapper>
      <S.WrapperLyric>{geniusState.song.songLyrics}</S.WrapperLyric>
    </S.Wrapper>
  );
};

export default LyricContainer;
