import React, { Component, useRef } from 'react';

import './PlayerVideo.css';

interface video {
  title: string;
}

class PlayerVideo extends Component<video> {
  state = {
    title: ''
  };

  constructor(props: any) {
    super(props);
    this.state.title = 'test';
  }

  render() {
    return (
      <div className="m-4">
        <h3>{this.state.title}</h3>
        <video className="video" controls src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></video>
      </div>
    );
  }
}

export default PlayerVideo;
