
import { SEARCH_TRACKS } from '../../constants';

const tracks = {};

function reducerSearchTracks(state = tracks, action) {

  switch (action.type) {
    case SEARCH_TRACKS:
      return state;
  
    default:
      return state;
  }

};


export default reducerSearchTracks;