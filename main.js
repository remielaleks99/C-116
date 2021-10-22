nose_X = 0;
nose_y = 0;
function preload(){
    var clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
canvas = createCanvas(300,300);
    canvas.position(600, 400);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nose_X, nose_Y, 20);
    image(clown_nose, nose_X, nose_Y, 25, 25);
}
function modelLoaded(){
    console.log("PoseNet is loaded");
}
function gotPoses(results){
    if(results.length > 0)
{
    console.log(results);
    console.log("nose X = "+results[0].pose.nose.x);
    console.log("nose Y ="+results[0].pose.nose.y);
    nose_X = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
}
}
function take_snapshot(){
    save("myFilterimage.png");
}

