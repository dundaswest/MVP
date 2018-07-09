import React from 'react';
import Dropzone from 'react-dropzone';

class Basic extends React.Component {
  constructor() {
    super()
    this.state = {

      files: [],
      fileName : ''
    }
  }

  onDrop(files) {
    this.setState({
      files
    });
   // this.props.handleFileSubmit();
  }
 handleFileName(fileName) {

   this.setState({fileName});
 }
  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul >
            {
              this.state.files.map(f =>
              <li id="fileName" key={f.name}>{f.name}</li>
            )
            }
          </ul>
        </aside>
      </section>
    );
  }
}




export default Basic;








