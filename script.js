// Author:

// Global UI Variables
let mobilenet;
let video;
let isModelReady;
//let canvasDiv;

// Global ML Variables
//let mobilenet;

function setup() {
  video = createCapture(VIDEO);
  video.style("display", "none");
  isModelReady = false;
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);





}

function draw() {
  image(video, 0, 0);
  if(isModelReady) {
  mobilenet.classify(canvas, gotResults);

}

}

function modelReady() {
  isModelReady = true;


}

function gotResults(error, results) {

}
