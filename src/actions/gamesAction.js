import axios from 'axios';
import { popularGameURL, upcomingGamesURL, newGamesURL } from '../api';

//Action Creater

export const loadGames = () => async (dispath) => {
  //FETCH AXIOS
  const populerData = await axios.get(popularGameURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispath({
    type: 'FETCH_GAME',
    payload: {
      populer: populerData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
