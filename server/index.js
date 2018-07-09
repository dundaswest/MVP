const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const bucketName = 'Bucket where the file resides, e.g. my-bucket';
// const fileName = 'Path to file within bucket, e.g. path/to/image.png';

// Performs text detection on the gcs file
app.get('/receipt', (req, res) => {
  // get house info from database
  const fileName = '/Users/jo-eunbyeol/workspace/MVP/server/tj3.jpg';
  client
 // .textDetection(`gs://test1234ab/tj3.jpg`)
  .textDetection(fileName)
  .then(results => {
    let detections = results[0].textAnnotations;
    // detections.forEach(text =>  console.log('here!!!',text.description, JSON.stringify(text)));
    let texts = results[0].fullTextAnnotation.text.split('\n');
    console.log(texts)
    let itemStart = texts.findIndex((e) => e.split(' ').includes('OPEN'));
    let price = detections.filter((t,i) => {
     return t.description.includes('.') && t.boundingPoly.vertices[0]["x"] > 400
    }).sort((t1, t2) => {
      let t1Min = Math.min(...t1.boundingPoly.vertices.map(e => e["y"]));
      let t2Min = Math.min(...t2.boundingPoly.vertices.map(e => e["y"]));
       return t1Min - t2Min;
    }).map(e => e.description);
   console.log(price)
   let items = texts.slice(0).splice(itemStart+1,price.length -5)
    .filter(e => !/[0-9]/.test(e[0]));
    res.send({price,items})

  })
  .catch(err => {
    console.error('ERROR:', err);
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
