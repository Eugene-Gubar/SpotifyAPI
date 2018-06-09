

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';
import Card from '../Card';

class ViewResult extends Component {
  static propTypes = {
    tracks: PropTypes.object,
    getDescFooter: PropTypes.func
  }

  state = {
    onlyTrack: undefined
  }

  constructor() {
    super();
    this._aOnlyTrack = false;
  }

  get activeOnlyTrack() {
    return this._aOnlyTrack;
  }
  setActiveOnlyTrack = (bool) => {
    this._aOnlyTrack = bool;
  }

  render() {
    const { tracks } = this.props;

    var resTracks;
    if (tracks.items && !this.activeOnlyTrack) {
      resTracks = tracks.items.map((track, pos) => (
        <Card key={track.id} track={track} hShowOnlyTrack={this.hShowOnlyTrack} pos={pos} getDescFooter={this.props.getDescFooter} />
      ));
    }

    var onlyTrack;
    if (this.activeOnlyTrack) {
      var image = this.state.onlyTrack.album.images[0].url;
      var styleBgViewResults = 
      `background: url(${image});
       width: 920px;
       height: 640px;
       background-size: cover;
       background-repeat: no-repeat;
       background-position: 50% 50%;`;
      document.getElementsByClassName('main')[0].style.cssText = styleBgViewResults;
      const style = {
        float: 'none',
        display: 'inline-block'
      };
      onlyTrack = <Card track={this.state.onlyTrack} style={style} setActiveOnlyTrack={this.setActiveOnlyTrack} getDescFooter={this.props.getDescFooter} />;
    }

    return (
      <div className="view-results">
        {(this.activeOnlyTrack) ? onlyTrack : resTracks}
      </div>
    );
  }

  hShowOnlyTrack = (pos) => {
    const { tracks } = this.props;
    if (tracks.items && tracks.items[pos]) {
      const onlyTrack = tracks.items[pos];
      this.setActiveOnlyTrack(true);
      this.setState({onlyTrack: onlyTrack});
    }
  }

};

const props = (state) => {
  let { tracks } = state;
  return {
    tracks
  };
};

export default connect(props, null)(ViewResult);