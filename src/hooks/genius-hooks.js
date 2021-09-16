import { useContext } from 'react';
import { GeniusContext } from '../providers/genius-provider';

const useGenius = () => {
  const { geniusState, getSong } = useContext(GeniusContext);

  return { geniusState, getSong };
};

export default useGenius;
