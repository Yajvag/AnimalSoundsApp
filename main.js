main.js
function startClassification() {
    navigator.mediaDevices.getUserMedia({  audio: true});
    classifier = mlf.soundClassifier('https://teachablemachine.withgoogle.com/models/HLCUM1iwy/model.json',modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

elephant = 0;
dog = 0;
cat = 0;
pig = 0;
bird = 0;
horse = 0;
cow = 0;
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
  
      img = document.getElementById('ear')

      if(results[0].label == "Elephant Trumpeting"){
        img.src = 'elephant.jpg';
        elephant = elephant + 1;
      } else if(results[0].label == "Dog Barking") {
        img.src = 'dog.jpg';
        dog = dog + 1;
      } else if(results[0].label == "Cat Meowing") {
        img.src = 'cat.jpg';
        cat = cat + 1;
      } else if(results[0].label == "Pig Oinking") {
        img.src = 'pig.jpg';
        pig = pig + 1;
      }  else if(results[0].label == "Bird Chirping") {
        img.src = 'bird.jpg';
        bird = bird + 1;
      } else if(results[0].label == "Horse Neighing") {
        img.src = 'horse.jpg';
        horse = horse + 1;
      } else if(results[0].label == "Cow Mooing"){
        img.src = 'cow.jpg';
        cow = cow + 1;
      } else {
        img.src = 'ear.jpg'
      }
    }
  }