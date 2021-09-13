import React from 'react';

import * as S from './styled';

const SongsList = ({ id, title, songUrl }) => (
  <S.List>
    <S.SongItem key={id}>
      <S.Link href={songUrl} target="_blank" rel="noreferrer">
        {title}
      </S.Link>
    </S.SongItem>
  </S.List>
);

export default SongsList;
