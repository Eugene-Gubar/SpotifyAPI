
import { SEARCH_TRACKS } from '../../constants';

const tracks = {};

function reducerSearchTracks(state = tracks, action) {
  console.log('reducer');
  switch (action.type) {
    case SEARCH_TRACKS:
      return {
        ...action.search.tracks
      };
  
    default:
      return state;
  }

};


export default reducerSearchTracks;