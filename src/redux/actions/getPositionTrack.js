
import { SEARCH_TRACKS } from '../../constants';

function actionSearchTracks(search) {

  return dispatch => {
    spotifyApi.searchTracks(search, { limit: 3 })
      .then((data) => {
        dispatch({ type: SEARCH_TRACKS, search: data });
      }, (err) => {
        if (err.status === 401) {
          console.error(`ERROR STATUS ${err.status}, ERROR MESSAGE: ${err.message}`);
          clearBadTokenInStorage();
          initToken();
        }
        else throw err;
      }).catch((err) => {
        console.error('Something Wrong: ', err);
      });
  };
  
}

export default actionSearchTracks;