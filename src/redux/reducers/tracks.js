
import { SEARCH_TRACKS, START, SUCCESS } from '../../constants';

const tracks = {};

function reducerSearchTracks(state = tracks, action) {

  switch (action.type) {
    case SEARCH_TRACKS + SUCCESS:
      return {
        ...action.search.tracks,
        loader: false
      };
    case START:
      return {
        loader: true
      };
    default:
      return state;
  }

};


export default reducerSearchTracks;