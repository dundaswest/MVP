/*
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
/*
// Performs text detection on the gcs file
app.get('/receipt', (req, res) => {
  // get house info from database
  client
  .textDetection(`gs://test1234ab/joe2.jpg`)
  .then(results => {
    let detections = results[0].textAnnotations;
    let texts = results[0].fullTextAnnotation.text.split('\n');
    console.log('Text:');
    console.log(texts);

    let prices = texts.filter((t) => t.includes('.'));
    console.log(texts.filter((t) => !t.includes('.') && !/[0-9]/.test(t)));
    let menuNum = prices.length - 4;
    let menuStart = texts.indexOf(prices[prices.length- 5]);
    let menus = texts.slice(0).splice(menuStart + 1,menuNum);
  //  detections = detections.filter((text) => text.description.includes('$'));
  //  detections.forEach(text =>  console.log('here!!!',text.description));
    let info = detections.map((text) => text.description)[0].split('\n');
    let start = info.indexOf('AMT');
    info = info.slice(start);
   // console.log(info)
   // console.log('here!!!!!!',info[0].split('\n'));
  //  console.log('detections',detections[1].description);
    res.send({prices, menus});
   // detections.forEach(text => console.log(text.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
*/
