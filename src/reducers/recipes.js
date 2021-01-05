import data from 'src/data';

// state initial du morceau "recettes" de notre store
const initialState = {
  list: data,
};

const reducer = (oldState = initialState, action) => {
  console.log('oldState: ', oldState);

  return { ...oldState };
};

export default reducer;
