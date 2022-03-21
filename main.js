first_song="";
second_song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
first_song=loadSound("music.mp3");
second_song=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(350,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function draw(){
    image(video,0,0,350,350);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristY=results[0].pose.leftWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
        righttWristY=results[0].pose.rightWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        console.log(leftWristY);
    }
}