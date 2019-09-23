const MovieReducer = (state, action) => { // 1
  switch (action.type) {
    case "UPDATE_FAV_MOVIE_LIST": {
      const movie = state.find(name => name === action.payload)
      if (movie) {
        return state.filter(name => name !== movie)
      }
      return [...state, action.payload]
    }
    default:
      return state;
  }
};

export default MovieReducer