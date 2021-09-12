import React from 'react';
import { SongCard } from '../index';

import * as S from './styled';

const Profile = () => (
  <S.Wrapper>
    <S.Image
      src="https://images.genius.com/25d8a9c93ab97e9e6d5d1d9d36e64a53.1000x1000x1.jpg"
      alt="Artist avatar"
    />
    <S.WrapperArtistProfile>
      <S.WrapperArtistInfo>
        <S.ArtistName>Kendrick Lamar</S.ArtistName>
        <S.ArtistInstagramLink
          href="https://www.instagram.com/kendricklamar"
          target="blank"
          rel="noreferrer">
          @kendricklamar
        </S.ArtistInstagramLink>
      </S.WrapperArtistInfo>
      <S.WrapperSongCards>
        <SongCard />
      </S.WrapperSongCards>
    </S.WrapperArtistProfile>
  </S.Wrapper>
);

export default Profile;
