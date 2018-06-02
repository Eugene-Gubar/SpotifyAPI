
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import coverLinkin from './cover-linkin-park.jpg';
import coverDisk from './cover-disk.svg';

class Footer extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <footer className="footer">
        <div className="blur select-song visuallyhidden">
          <p className="caption-select">Please select song</p>
        </div>
        <div className="details-song">
          <div className="details-caption">
            <p>TITLE</p>
            <p>In The End</p>
          </div>
          <div className="details-caption">
            <p>LENGTH</p>
            <p>3:36</p>
          </div>
          <div className="details-caption">
            <p>ALBUM</p>
            <p>Hybrid Theory</p>
          </div>
          <div className="details-caption details-author">
            <p>AUTHOR</p>
            <p>linkin park</p>
          </div>
          <div className="details-caption">
            <p>YEAR</p>
            <p>2000</p>
          </div>
          <div className="img-song">
            <a href="#">
              <picture>
                <img className="song-image-cover" src={coverDisk} alt="" width="160" height="160"/>
              </picture>
            </a></div>
        </div>
      </footer>
    );
  }
};

export default Footer;
