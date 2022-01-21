Webcam.set({
  width: 350,
  height: 300,
  imageFormat: "png",
  png_quality:"999",
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='captuerd_image' src='" + data_uri +"'>";
  });
}
console.log("ml5Version: " , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JrWY2AevW/model.json", modelLoaded);
function modelLoaded(){
  console.log("Model loaded");
}

function check() {
   img = document.getElementById("captuerd_image");
   classifier.classify(img , gotresult);
}

function gotresult(error, result) {
  if (error) {
console.error(error);
  }
  else {
    console.log(result);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
  }
}