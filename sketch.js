const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var platform1, platform2;
var rope;
var dayBG;
var thanos1, thanos2, thanos3, thanos4;
var box1, box2, box3, box4;
var gs="inHand";
var score = 0;

function preload() {
  dayBG = loadImage("Images/DayBG.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;

  //base or platform
  platform1 = new Ground(window.innerWidth/2, window.innerHeight/1, window.innerWidth, 30);
  platform2 = new Ground(window.innerWidth/5.5, window.innerHeight/1.24, 150, 263);

  //hammer
  Mjolnir = new MJOLNIR(window.innerWidth/6.5, window.innerHeight/1.8);

  //constraint
  rope = new Rope(Mjolnir.body, {x:window.innerWidth/6.8,y: window.innerHeight/2.3});
  
  //enemies
  thanos1 = new THANOS(window.innerWidth/1.28, window.innerHeight/1.3);
  thanos2 = new THANOS(window.innerWidth/1.2, window.innerHeight/1.1);
  thanos3 = new THANOS(window.innerWidth/1.13, window.innerHeight/1.3);
  thanos4 = new THANOS(window.innerWidth/1.2, window.innerHeight/1.7);

  //logs and boxes
  box1 = new BOX(window.innerWidth/1.33, window.innerHeight/1.1, 100, 110);
  box2 = new BOX(window.innerWidth/1.1, window.innerHeight/1.1, 100, 110);
  box3 = new BOX(window.innerWidth/1.33, window.innerHeight/1.7, 100, 110);
  box4 = new BOX(window.innerWidth/1.1, window.innerHeight/1.7, 100, 110);

  log1 = new LOG(window.innerWidth/1.2, window.innerHeight/1.2, 400, 20);
  log2 = new LOG(window.innerWidth/1.2, window.innerHeight/1.35, 20, 120);
  log3 = new LOG(window.innerWidth/1.3, window.innerHeight/1.35, 20, 120);
  log4 = new LOG(window.innerWidth/1.1, window.innerHeight/1.35, 20, 120);
  log5 = new LOG(window.innerWidth/1.2, window.innerHeight/1.5, 400, 20);
  log6 = new LOG(window.innerWidth/1.2, window.innerHeight/2.1, 400, 20);
}

function draw() {
  background(dayBG);  
  Engine.update(engine);

  //displaying score
  push();
  textSize(20);
  strokeWeight(2);
  stroke("#E29126");
  text("Score: "+score, window.innerWidth/1.15, window.innerHeight/11);
  pop();

  //displaying game objects
  platform1.display();
  platform2.display();

  rope.display();

  thanos1.display();
  thanos2.display();
  thanos3.display();
  thanos4.display();

  thanos1.Score();
  thanos2.Score();
  thanos3.Score();
  thanos4.Score();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  log6.display();

  Mjolnir.display();

  drawSprites();
}

//event handlers
function mouseDragged() {
  if(gs==="inHand") {
  Matter.Body.setPosition(Mjolnir.body, {x: mouseX, y:mouseY})
  }
}

function mouseReleased() {
  rope.fly()
  gs = "launched";
}

function keyPressed() { 
  if(keyCode = 32){
      window.location.reload()
  }
}