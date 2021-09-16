import React from 'react';
import useGenius from '../../hooks/genius-hooks';

import * as S from './styled';

const Profile = () => {
  const { geniusState } = useGenius();

  return (
    <S.Wrapper>
      <S.Image src={geniusState.artist.artistImageUrl} alt="Artist avatar" />
      <S.WrapperArtistProfile>
        <S.WrapperArtistInfo>
          <S.SongName>{geniusState.song.songName}</S.SongName>
          <S.ArtistName>{geniusState.artist.artistName}</S.ArtistName>
        </S.WrapperArtistInfo>
      </S.WrapperArtistProfile>
    </S.Wrapper>
  );
};

export default Profile;
