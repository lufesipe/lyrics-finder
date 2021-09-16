import React, { createContext, useState, useCallback } from 'react';
import api from '../services/api';
import { checkInputs, getLyrics } from '../utils';

const token = process.env.REACT_APP_ACCESS_TOKEN;

export const GeniusContext = createContext({
  loading: false,
  artist: {},
  songlist: [],
});

const GeniusProvider = ({ children }) => {
  const [geniusState, setGeniusState] = useState({
    loading: false,
    artist: {
      artistName: undefined,
      artistImageUrl: undefined,
    },
    song: {
      songName: undefined,
      songLyrics: undefined,
    },
  });

  // ** Requisição para busca de música e artista inseridos com validação de inserção dos dados **
  const getSong = async (songName, artistName) => {
    // ** Checa se os valores de input foram preenchidos **
    const inputValues = { song: songName, artist: artistName };
    checkInputs(inputValues);

    // ** Faz a requisição dos dados inseridos para a API e guarda em results **
    const { data } = await api.get(`/search?q=${songName} ${artistName}&access_token=${token}`);
    const results = data.response.hits[0].result;
    // eslint-disable-next-line no-console
    console.log(results);

    // ** Lidando com dados não encontrados **
    if (results.length === 0) throw new Error('Não encontrado');

    // ** Busca a letra da música desejada **
    const lyric = getLyrics(results.url).then((data) => {
      console.log('data', data);
      const lyrics = new DOMParser()
        .parseFromString(data, 'text/html')
        .getElementsByClassName('lyrics');
      // .item(0).textContent;
      return lyrics;
    });
    console.log('musica final', lyric);

    // ** Alterando o estado com os dados recebidos **
    setGeniusState((prevState) => ({
      ...prevState,
      artist: {
        artistName: results.primary_artist.name,
        artistImageUrl: results.primary_artist.image_url,
      },
      song: {
        songName: results.title,
        // songLyrics: lyric,
      },
    }));
  };

  const contextValue = {
    geniusState,
    getSong: useCallback((songName, artistName) => getSong(songName, artistName), []),
  };

  return <GeniusContext.Provider value={contextValue}>{children}</GeniusContext.Provider>;
};

export default GeniusProvider;
