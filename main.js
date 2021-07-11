song="";
leftx=0;
lefty=0;
rightx=0;
righty=0;

function preload() {
    song=loadSound("music.mp3");
}


function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

   posenet=ml5.poseNet(video,modelLoaded); 
   posenet.on("pose",gotPoses);
}
function modelLoaded() {
    console.log("PoseNet Is Initialized");
}
function play() {
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);



        rightx=results[0].pose.rightWrist.x;
        righty=results[0].pose.rightWrist.y;
        console.log("Right Wrist X Is"+rightx+"Right Wrist Y Is"+righty);

        leftx=results[0].pose.leftWrist.x;
        lefty=results[0].pose.leftWrist.y;
        console.log("Left Wrist X Is"+leftx+"Left Wrist Y Is"+lefty);
    }
}
function draw() {
    image(video,0,0,600,500);
fill(50,162,123);
stroke(50,162,123);
circle(leftx,lefty,20);
numlefty=Number(lefty);
nodecimalslefty=floor(numlefty);
volume=nodecimalslefty/500;
song.setVolume(volume);
document.getElementById("volume").innerHTML="Volume= "+volume;
}
