import axios from 'axios';

const getLyrics = async (url) => {
  if (!url) throw new Error('Não encontrado');
  else {
    const { data } = await axios.get(url);
    return data;
  }
};

export default getLyrics;
