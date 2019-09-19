const MovieReducer = (state, action) => { // 1
    switch (action) {
      case "UPDATE_FAV_MOVIE_LIST":
        return state
      default:
        return state;
    }
  };

  export default MovieReducer