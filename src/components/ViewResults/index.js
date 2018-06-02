

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import linkin from './linkin-park.jpg';
import notImage from './not-image.svg';

class ViewResult extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <div className="view-results">
        <div className="card-song">
          <img src={linkin} alt=""/>
          <div className="strip top-strip">
            <p className="caption band-name">linkin park</p>
          </div>
          <div className="strip bottom-strip">
            <p className="caption song-name">In The End </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewResult;