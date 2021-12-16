img="";
var status="";
function preload(){
    img=loadImage("Fruits.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("orange",320,20);
    textSize(20);
    noFill();
    stroke("#ff0000");
    rect(300,0,180,150);
}
function back(){
    window.location="index.html";
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}