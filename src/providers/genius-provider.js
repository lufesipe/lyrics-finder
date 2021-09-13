import React, { createContext, useState } from 'react';

export const GeniusContext = createContext({
  artist: {},
  songs: [],
});

const GeniusProvider = ({ children }) => {
  const [geniusState] = useState({
    artist: {
      artistId: 0,
      artistName: undefined,
      instagramName: undefined,
      artistImageUrl: undefined,
    },
    songs: [
      // songId: 0,
      // songUrl: undefined,
      // songImageUrl: undefined,
      // title: undefined,
    ],
  });

  const contextValue = {
    geniusState,
  };

  return <GeniusContext.Provider value={contextValue}>{children}</GeniusContext.Provider>;
};

export default GeniusProvider;
