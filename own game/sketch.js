const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload() {
  // playerImg = loadImage("images/hero1-removebg-preview.png");
  // groundImg = loadImage("images/platform.jpg");
  // enemyImg = loadImage("images/ghost.png");
  backgroundImg = loadImage("images/night sky.jpg");
  startImg = loadImage("images/start.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(windowWidth / 2, windowHeight - 50, windowWidth, 100);
  //  base.addImage(groundImg);
  player = new Player(100, windowHeight - 156, 200, 200);
  //  player.addImage(playerImg);
  // player.scale = 1.2

  enemy = new Enemy(windowWidth - 100, windowHeight - 200, 200, 150);
  // enemy.addImage(enemyImg)
  // enemy.scale = 0.6
}

function draw() {

  Engine.update(engine);

  background(backgroundImg);

  player.display();
  base.display();
  enemy.display();

  if (keyIsDown(RIGHT_ARROW)) {
    player.body.position.x = player.body.position.x + 10;
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.body.position.x = player.body.position.x - 10;
    player.displayFlip();
  }
    if (keyCode == 81) {
      if (enemy.body.position.x - player.body.position.x < 50) {
        player.displayAttack();
      }
    }

    if (keyCode == 32){
      player.body.position.y = player.body.position.y - 30;
    }
  
}