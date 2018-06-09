
import { SEARCH_TRACKS, START, SUCCESS } from '../../constants';
import spotifyApi, { clearBadTokenInStorage, initToken } from '../../configs/apiSpotify';


function actionSearchTracks(search) {

  return dispatch => {
    dispatch({ type: START });
    spotifyApi.searchTracks(search, { limit: 3 })
      .then((data) => {
        dispatch({ type: SEARCH_TRACKS + SUCCESS, search: data });
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