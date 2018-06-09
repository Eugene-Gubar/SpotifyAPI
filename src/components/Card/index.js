

import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import notImageSvg from './img/not-image.svg';

const Card = ({ track, hShowOnlyTrack, pos, style, setActiveOnlyTrack, getDescFooter }) => {
  const image = (track.album.images[1].url.length > 0) ? track.album.images[1].url : notImageSvg;

  const hActiveTrack = () => {
    if (typeof hShowOnlyTrack === 'function') {
      hShowOnlyTrack(pos);
    }
  };

  if (typeof setActiveOnlyTrack === 'function') {
    setActiveOnlyTrack(false);
    const { id } = track;
    getDescFooter(id);
    document.getElementsByClassName('footer')[0].firstElementChild.classList.add('visuallyhidden');
  }


  return (
    <div onClick={hActiveTrack} style={style} className="card-song">
      <img src={image} alt={track.name} title={track.album.name} width="240" height="240"/>
      <div className="strip top-strip">
        <p className="caption band-name">{track.name}</p>
      </div>
      <div className="strip bottom-strip">
        <p className="caption song-name">{track.album.name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  track: PropTypes.object,
  style: PropTypes.object,
  hShowOnlyTrack: PropTypes.func,
  setActiveOnlyTrack: PropTypes.func,
  pos: PropTypes.number,
  getDescFooter: PropTypes.func
};

export default Card;
