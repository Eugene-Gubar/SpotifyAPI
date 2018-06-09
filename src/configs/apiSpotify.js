

import Spotify from 'spotify-web-api-js';

export const clientId = 'ba0ecd105e7e43c2917462c8400d04a7';
export const redirectUri = 'https%3A%2F%2Feugene-gubar.github.io%2FSpotifyAPI';
export const getTokenUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&state=123`;


const spotifyApi = new Spotify();
export default spotifyApi;


export const clearBadTokenInStorage = () => {
  window.localStorage.removeItem('token');
};

export const hasTokenSpotify = () => {
  if (window.localStorage.getItem('token')) return true;
  return false;
};

export const setTokenAccess = () => {
  const token = window.localStorage.getItem('token');
  spotifyApi.setAccessToken(token);
};

export const initToken = () => {

  const accessToken = window.location.hash.slice(1, 13);
  if (!hasTokenSpotify() && accessToken !== 'access_token') {
    window.location.replace(getTokenUrl);
  } else if (!hasTokenSpotify() && accessToken === 'access_token') {
    const url = window.location.href;
    window.localStorage.setItem('token', url.match(/#(?:access_token)=([\S\s]*?)&/)[1]);
    const token = window.localStorage.getItem('token');
    spotifyApi.setAccessToken(token);
    window.history.replaceState(null, null, window.location.pathname);
  }

};