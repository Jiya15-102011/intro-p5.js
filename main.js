function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,230,150,220,200);
    fill("red");
    stroke("green");
    circle(80,80,80);
    fill("red");
    stroke("green");
    circle(550,80,80);
    fill("red");
    stroke("green");
    circle(80,420,80);
    fill("red");
    stroke("green");
    circle(550,420,80);
    fill("green");
    stroke("green");
    rect(120,70,390,20);
    fill("green");
    stroke("green");
    rect(120,410,390,20);
    fill("green");
    stroke("green");
    rect(70,120,20,260);
    fill("green");
    stroke("green");
    rect(540,120,20,260);
}


    

function take_snapshot(){
    save('pictutre.jpeg')
}