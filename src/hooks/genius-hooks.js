import { useContext } from 'react';
import { GeniusContext } from '../providers/genius-provider';

const useGenius = () => {
  const { geniusState } = useContext(GeniusContext);

  return { geniusState };
};

export default useGenius;
