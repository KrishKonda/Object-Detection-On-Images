img="";
function preload(){
    img=loadImage("table.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
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