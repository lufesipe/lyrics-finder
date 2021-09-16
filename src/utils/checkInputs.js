// ** Retorna um erro se algum input não for preenchido **

const checkInputs = (inputValues) => {
  const { song, artist } = inputValues;
  if (!song) {
    throw new Error('É necessário inserir o nome da música');
  } else if (!artist) {
    throw new Error('É necessário inserir o nome do artista');
  }
};

export default checkInputs;
