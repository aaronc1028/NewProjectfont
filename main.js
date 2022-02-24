var xLeftWrist=0
var xRightWrist=0
function setup(){
canvas=createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function preload(){

}
function draw(){
image(video,0,0,500,500)
}
function modelLoaded(){
    console.log(" Pose Net is Initialized ")
}
function gotPoses(results){
    console.log(results)
    if(results.length>0){
        xLeftWrist=results[0].pose.leftWrist.x 
        xRightWrist=results[0].pose.rightWrist.x 
        difference=floor(xLeftWrist-xRightWrist)
    }
}
