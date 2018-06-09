
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import coverDisk from './img/cover-disk.svg';

class Footer extends Component {
  static propTypes = {
    descId: PropTypes.string,
    tracks: PropTypes.object
  }

  render() {

    const { descId } = this.props;
    const tracks = this.props.tracks.items;

    var descTrackFill = {
      name: '',
      album: {
        name: '',
        release_date: '',
        images: [null, {
          url: ''
        }]
      },
      duration_ms: '',
      artists: [{
        name: ''
      }],
      preview_url: ''
    };
    var descTrack;
    if (Array.isArray(tracks) && tracks.length > 0 && descId) {
      descTrack = tracks.filter(el => {
        if (el.id === descId) return true;
        return false;
      });
      descTrack = descTrack[0];
    }
    if (!descTrack)
      descTrack = descTrackFill;
    
    return (
      <footer className="footer">
        <div className={(descId) ? 'visuallyhidden' : 'blur select-song'}>
          <p className="caption-select">Please select song</p>
        </div>
        <div className="details-song">
          <div className="details-caption">
            <p>TITLE</p>
            <p>{descTrack.name}</p>
          </div>
          <div className="details-caption">
            <p>LENGTH</p>
            <p>{((descTrack.duration_ms)/60000).toFixed(2)}</p>
          </div>
          <div className="details-caption">
            <p>ALBUM</p>
            <p>{descTrack.album.name}</p>
          </div>
          <div className="details-caption details-author">
            <p>AUTHOR</p>
            <p>{descTrack.artists[0].name}</p>
          </div>
          <div className="details-caption">
            <p>YEAR</p>
            <p>{descTrack.album.release_date}</p>
          </div>
          <div className="img-song">
            <a href={descTrack.preview_url} target="_blank">
              <picture>
                <img className="song-image-cover" src={(!descTrack.album.images[1].url) ? coverDisk : descTrack.album.images[1].url} alt={descTrack.album.name} title={descTrack.album.name} width="160" height="160"/>
              </picture>
            </a>
          </div>
        </div>
      </footer>
    );
  }

};

export default connect((state) => ({
  tracks: state.tracks
}))(Footer);
