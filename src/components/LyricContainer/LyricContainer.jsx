import React from 'react';
import useGenius from '../../hooks/genius-hooks';

import * as S from './styled';

const LyricContainer = () => {
  const { geniusState } = useGenius();
  return <S.Wrapper>{geniusState.song.songLyrics}</S.Wrapper>;
};

export default LyricContainer;
