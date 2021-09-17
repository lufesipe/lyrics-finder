import React from 'react';
import useGenius from '../../hooks/genius-hooks';

import * as S from './styled';

const Lyrics = () => {
  const { geniusState } = useGenius();

  return (
    <>
      {geniusState.song.songLyrics.map((section, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.LyricsSection key={index}>
          {section.split('¬').map((paragraph, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <S.LyricsParagraph key={index}>{paragraph}</S.LyricsParagraph>
          ))}
        </S.LyricsSection>
      ))}
    </>
  );
};

export default Lyrics;
