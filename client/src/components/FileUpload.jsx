import React from 'react';
import React, { Component } from 'react';

class FileUpload extends Component {

  constructor(props) {
    super(props);
      this.state = {
        uploadStatus: false
      }
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }


  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    axios.post('http://localhost:8000/upload', data)
      .then(function (response) {
        console.log(body.file)
    this.setState({ imageURL: `http://localhost:3000/${body.file}`, uploadStatus: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
  /* Omitted for brevity */
    <div>file</div>
 }
}
 export default FileUpload;
