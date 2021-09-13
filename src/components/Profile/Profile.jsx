import React from 'react';
import useGenius from '../../hooks/genius-hooks';
import { SongCard } from '../index';

import * as S from './styled';

const Profile = () => {
  const { geniusState } = useGenius();

  return (
    <S.Wrapper>
      <S.Image src={geniusState.artist.artistImageUrl} alt="Artist avatar" />
      <S.WrapperArtistProfile>
        <S.WrapperArtistInfo>
          <S.ArtistName>{geniusState.artist.artistName}</S.ArtistName>
          <S.ArtistInstagramLink
            href="https://www.instagram.com/kendricklamar"
            target="_blank"
            rel="noreferrer">
            {geniusState.artist.instagramName}
          </S.ArtistInstagramLink>
        </S.WrapperArtistInfo>
        <h3>TOP SONGS</h3>
        <S.WrapperSongCards>
          <SongCard
            songUrl="https://genius.com/Kendrick-lamar-humble-lyrics"
            songImageUrl="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F483306c535608c27f9e3781b854dc91d.1000x1000x1.png"
            title="HUMBLE."
          />
          <SongCard
            songUrl="https://genius.com/Kendrick-lamar-humble-lyrics"
            songImageUrl="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F483306c535608c27f9e3781b854dc91d.1000x1000x1.png"
            title="A MUSICA MAIS TRISTE DO ANO"
          />
          <SongCard
            songUrl="https://genius.com/Kendrick-lamar-humble-lyrics"
            songImageUrl="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F483306c535608c27f9e3781b854dc91d.1000x1000x1.png"
            title="HUMBLE."
          />
        </S.WrapperSongCards>
      </S.WrapperArtistProfile>
    </S.Wrapper>
  );
};

export default Profile;
