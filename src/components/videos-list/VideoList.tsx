import React, { Component, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import './VideoList.css';

class VideoList extends Component {
  state = {
    selectedVideo: '',
    videos: [
      { key: 1000, filePath: 'files/title1', fileName: 'test' },
      { key: 1001, filePath: 'files/title2', fileName: 'test2' },
      { key: 1002, filePath: 'files/title3', fileName: 'test3' }
    ]
  };

  selectVideo(title: String) {
    this.setState({ selectedVideo: title });
  }

  render() {
    return (
      <div className="">
        <h3 className="mt-4 mb-4">Vidéos</h3>
        <ListGroup>
          {this.state.videos.map((e) => (
            <ListGroup.Item key={e.key} action href={`#${e.filePath}`}>
              {`${e.fileName}`}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default VideoList;
