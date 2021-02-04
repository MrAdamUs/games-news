const initState = {
  populer: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAME':
      return {
        ...state,
        populer: action.payload.populer,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case 'FETCh_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
