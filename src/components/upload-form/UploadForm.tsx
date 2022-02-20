import React, { Component, useState } from 'react';

import axios from 'axios';

import './UploadForm.css';

import { Form, ProgressBar, Button } from 'react-bootstrap';

import { uploadFile } from '../../services/file.service';

class UploadForm extends Component {
  state = {
    selectedFile: '',
    fileName: '',
    loaded: 0,
    uploading: false,
    message: '',
    filePath: ''
  };

  saveVideo = (event: any) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;

    this.setState({
      selectedFile: file,
      fileName: fileName
    });
  };

  uploadVideo = (event: any) => {
    event.preventDefault();
    if (this.state.uploading) return;
    if (!this.state.selectedFile) {
      this.setState({ message: 'Selectionnez un fichier' });
      return;
    }
    this.setState({ uploading: true });

    const data = new FormData();

    console.log(this.state);

    data.append('file', this.state.selectedFile);
    data.append('fileName', this.state.fileName);

    // const baseUrl: string = 'http://localhost:3030/api';
    // axios
    //   .post(`${baseUrl}/upload`, JSON.stringify(data.get('file')), {
    //     onUploadProgress: (ProgressEvent) => {
    //       this.setState({
    //         loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
    //       });
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res.statusText);
    //   });

    uploadFile(data).then((response) => {
      console.log(response);
      this.setState({ filePath: response.data.path });
    });
  };

  render() {
    return (
      <div className="upload-form">
        <Form className="mt-4 mb-4">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Nouvelle vidéo</Form.Label>
            <Form.Control type="file" onChange={this.saveVideo} />
          </Form.Group>
          <Button variant="primary" onClick={this.uploadVideo}>
            Upload
          </Button>
        </Form>
        {/* <p>{this.state.uploading ? `${this.state.loaded} %` : this.state.message}</p> */}
        <ProgressBar now={this.state.loaded} animated />
      </div>
    );
  }
}

export default UploadForm;
