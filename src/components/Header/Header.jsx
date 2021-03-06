import React, { useState } from 'react';
import useGenius from '../../hooks/genius-hooks';

import * as S from './styled';

const Header = () => {
  const { getSong } = useGenius();
  const [songForSearch, setSongForSearch] = useState('');
  const [artistForSearch, setArtistForSearch] = useState('');

  const submitGetSong = () => {
    if (songForSearch === '') throw new Error('digite uma música');
    else if (artistForSearch === '') throw new Error('digite um artista');
    else getSong(songForSearch, artistForSearch);
  };

  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder="Digite o nome da música..."
        onChange={(event) => setSongForSearch(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite o nome do artista..."
        onChange={(event) => setArtistForSearch(event.target.value)}
      />
      <button type="submit" onClick={submitGetSong}>
        PESQUISAR
      </button>
    </S.Wrapper>
  );
};

export default Header;
