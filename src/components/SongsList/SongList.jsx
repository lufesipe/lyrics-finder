import React from 'react';

import * as S from './styled';

const SongsList = ({ songId, title, songUrl }) => (
  <S.List>
    <S.SongItem key={songId}>
      <S.Link href={songUrl} target="_blank" rel="noreferrer">
        {title}
      </S.Link>
    </S.SongItem>
  </S.List>
);

export default SongsList;
