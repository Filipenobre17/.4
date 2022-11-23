var chao;
var nave;
var image_nave;
var plan_fun_;
var vx=0;
var vy=0;
var g=0.05;
var thrust;
var left;
var right;
var fuel=100;

function preload()
{
image_nave=loadImage('normal.png')
plan_fun_=loadImage('bg.png')
thrust=loadAnimation('b_thrust_1.png','b_thrust_2.png','b_thrust_3.png')
left=loadAnimation('left_thruster_1.png','left_thruster_2.png')
right=loadAnimation('right_thruster_1.png','right_thruster_2.png')
crash=loadAnimation('crash1.png','crash2.png','crash3.png')
land=loadAnimation('landing1.png','landing2.png','landing_3.png')

thrust.playing=true
thrust.looping=false
left.looping=false
right.looping=false
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  nave=createSprite(100,50,30,30)
  nave.addImage(image_nave)
  nave.scale=0.1
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(plan_fun_,0,0)

  push()
  fill('white')
  text('velocidade vertical: '+round(vy),800,75)
  pop()

  vy+=g
  nave.position.y+=vy

  drawSprites();
}

function keyPressed() {
  if (keyCode===UP_ARROW) {
    upward_thrust()
  }
}

function upward_thrust() {
  vy=-1
}
