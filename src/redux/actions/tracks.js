
import { SEARCH_TRACKS } from '../../constants';

function actionSearchTracks(search) {

  console.log('%cCall actionSearchTracks', 'color: blue; font-weight: bold');

  return {
    type: SEARCH_TRACKS,
    search
  };

}

export default actionSearchTracks;