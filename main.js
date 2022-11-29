function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);
    video.position(800,140);
    canvas=createCanvas(600,500);
    canvas.position(120,140);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("poses",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    background(51,47,208);
}