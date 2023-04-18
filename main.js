function preload(){}

function setup(){
    canvas = createCanvas(500,360);
    canvas.position(480, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw (){
    image(video, 0, 0, 500, 360);
    rect(0, 0, 500, 25);
    rect(0, 0, 25, 360);
    rect(0, 335, 640, 25);
    rect(475, 0, 25, 360)
    circle(20, 0, 125);
    circle(480, 0, 125);
    circle(500, 360, 125);
    circle(0, 360, 125);
    tint(tint_color);
}

function take_snapshot (){
    save('student_name.png');
}

function filter_tint (){
    tint_color = document.getElementById("color_name").value;
}