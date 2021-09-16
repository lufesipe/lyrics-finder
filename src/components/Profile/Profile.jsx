import React from 'react';
import useGenius from '../../hooks/genius-hooks';

import * as S from './styled';

const Profile = () => {
  const { geniusState } = useGenius();

  return (
    <S.Wrapper>
      <S.Image src={geniusState.artist.artistImageUrl} alt="Artist avatar" />
      <S.WrapperInfo>
        <S.SongName>{geniusState.song.songName}</S.SongName>
        <S.ArtistName>by {geniusState.artist.artistName}</S.ArtistName>
        <h3>Album</h3>
        <S.AlbumImage src={geniusState.artist.albumImageUrl} alt="Album cover" />
      </S.WrapperInfo>
    </S.Wrapper>
  );
};

export default Profile;
