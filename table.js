img="";
var status="";
function preload(){
    img=loadImage("table.jpg");
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
    text("laptop",210,120);
    textSize(20);
    noFill();
    stroke("#ff0000");
    rect(200,100,350,200);
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