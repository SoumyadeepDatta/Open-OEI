let capture;
let posenet;
let singlePose,skeleton;

let height = 480;
let width = 640;

let scaling_factor = 2;

let scaled_width = width / scaling_factor;
let scaled_height = height / scaling_factor;

function setup() {
    var vidcanvas = createCanvas(scaled_width, scaled_height);

    // vidcanvas.position(100, 100);
    
    vidcanvas.parent('vid');
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on("pose",receivedPoses)
}

// function windowResized() {
//     resizeCanvas(600, 480);
//   }

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        document.getElementById("status").innerHTML = "face detected";
    }
    else {
        document.getElementById("status").innerHTML = "no face detected";
    }
}

function modelLoaded(){
    console.log("Model loaded sucessfully");
}

// document.getElementById("toggle").addEventListener("click", toggleSkeleton => document.getElementById("toggle").innerHTML = "Hide");


function draw() {

    // imageMode(CENTER);

    let scaled_x = scaled_width / width;
    let scaled_y = scaled_height / height;

    image(capture, 0, 0, scaled_width, scaled_height, 0, 0, width, height);

    // image.position(100, 100);

    fill(0,255,0);

    if(singlePose){
        
        for(let i=0;i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x * scaled_x, singlePose.keypoints[i].position.y * scaled_y , 3 / scaling_factor, 3 / scaling_factor);
        }
        stroke(0,255,0);
        strokeWeight(5 / scaling_factor);
        for(let j=0;j<skeleton.length;j++){
            line(skeleton[j][0].position.x * scaled_x, skeleton[j][0].position.y * scaled_y, skeleton[j][1].position.x * scaled_x, skeleton[j][1].position.y * scaled_y);
        }
    }
    
    
}

