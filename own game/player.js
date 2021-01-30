class Player{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 1
        }
this.body = Bodies.rectangle(x,y,width,height,options);
this.image = loadImage("images/hero1-removebg-preview.png");
this.image1 = loadImage("images/pixil-frame-0.png");
this.image2 = loadImage("images/playerattack-removebg-preview.png");
World.add(world,this.body);
this.width = width;
this.height = height;
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
    displayFlip(){
        imageMode(CENTER);
        image(this.image1,this.body.position.x,this.body.position.y,this.width,this.height);
    }
    displayAttack(){
        imageMode(CENTER);
        image(this.image2,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
