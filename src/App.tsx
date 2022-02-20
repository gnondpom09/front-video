import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/header/Header';
import PlayerVideo from './components/player/PlayerVideo';
import VideoList from './components/videos-list/VideoList';
import UploadForm from './components/upload-form/UploadForm';

import { getAllFiles } from './services/file.service';

class App extends Component {
  state = {
    selectedVideo: '',
    videos: [],
    numberOfVideos: 0
  };

  getAllFiles = () => {
    getAllFiles().then((videos) => {
      console.log(videos);
      this.setState({ videos: videos, numberOfVideos: videos.length });
    });
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="content">
          <Container>
            <Row>
              <Col>
                <UploadForm></UploadForm>
                <VideoList></VideoList>
              </Col>

              <Col>
                <PlayerVideo title={this.state.selectedVideo}></PlayerVideo>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
