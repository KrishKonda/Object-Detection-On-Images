img="";
var status_obj="";
objects=[];
function preload(){
    img=loadImage("Bedroom.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    if(status_obj!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status: objects detected";
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            textSize(18);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function back(){
    window.location="index.html";
}
function modelLoaded(){
    console.log("modelLoaded");
    status_obj=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}