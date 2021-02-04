//Getting the date
//Current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Base URL
const APIKey = process.env.REACT_APP_KEY;
const base_url = `https://api.rawg.io/api/`;

// Pouplar Games
// https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
const popular_game = `games?key=${APIKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${APIKey}&dates=${currentDate},${nextYear}&&ordering=-added&page_size=10`;
const new_games = `games?key=${APIKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGameURL = () => `${base_url}${popular_game}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
//Game Details
export const gameDetailsURL = (gameId) => `${base_url}games/${gameId}`;
//Game ScreenShots
export const gameScreenShotURL = (gameId) =>
  `${base_url}games/${gameId}/screenshots`;
// Searched Game
export const searchGameURL = (game_name) =>
  `${base_url}games?serach=${game_name}&page_size=9`;
