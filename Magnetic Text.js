let sentence = "LOGOS";
let fontsize = 25;
let space = 5;
let rotation = 0;

let angleRotate = 0.0;
let speed = 0.0001;
let speedoffset = 0.5;





let x = 1;
let y = 1;
let easing = 0.0008;

var cols, rows;

var xnoise = 0;
var xnoisespeed = 0.00001;

//Increment x by 0.01
let x_increment = 0.01;
//Increment z by 0.02 every draw() cycle
let z_increment = 0.02;

var fr;
  var xoffset, yoffset, zoffset;

function setup() {
  smooth();
  createCanvas(windowWidth, windowHeight);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  cols = floor(width / fontsize);
  rows = floor(height / fontsize);

  sentenceArray = sentence.split("");

  fr = createP("");
    zoffset= 0;
 
}
function draw() {
  background(0);
  
  let count = 0;//sets count of sentence array
  let xoffset = 0;

  let yoffset = 0;
  
  noiseDetail(8);
  
  for (let o2 = fontsize; o2 <= height - fontsize; o2 += fontsize+space) {
    xoffset += x_increment;
    yoffset = 0;
    for (let o1 = fontsize; o1 <= width - fontsize; o1 += fontsize+space) {
      
      let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
    
       let r = atan2(y - o2, x - o1);//converts current point and mouse angle 


    
      
      var noiseFill = noise(xoffset, yoffset, zoffset) ;
      
      
      var v = p5.Vector.fromAngle(r);
      
      push();
      translate(o1, o2);

      rotate(v.heading()+noiseFill);
      text(sentenceArray[count], 0, 0);
      pop();
    fill(noiseFill*255);
    // rotation += speed;

      count += 1;//this cycles through the sentence
      count %= sentenceArray.length;//this loops the sentence
      xoffset += speedoffset;

    }
    yoffset += speedoffset;
    
  }
zoffset+=.08;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
