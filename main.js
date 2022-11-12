function classifier(){
    navigator.mediaDevices.getUserMedia({audio:true });
    classifer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VLgqEbvkm/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}

