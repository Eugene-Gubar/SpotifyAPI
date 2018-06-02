
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Footer extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <footer className="footer">
        <div className="blur select-song">
          <p className="caption-select">Please select song</p>
        </div>
        <div className="details-song">
          <div className="details-caption">
            <p>TITLE</p>
            <p></p>
          </div>
          <div className="details-caption">
            <p>ALBUM</p>
            <p></p>
          </div>
          <div className="details-caption">
            <p>YEAR</p>
            <p></p>
          </div>
          <div className="details-caption">
            <p>LENGTH</p>
            <p></p>
          </div>
          <div className="details-caption">
            <p>AUTHOR</p>
            <p></p>
          </div>
          <div className="img-song">
            <a href="">
              <picture>
                <img src="" alt=""/>
              </picture>
            </a></div>
        </div>
      </footer>
    );
  }
};

export default Footer;
