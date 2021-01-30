class Enemy{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("images/ghost.png");
        World.add(world,this.body);

        this.width = width;
        this.height = height;

    }
    display(){
    imageMode(CENTER);
   image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
   }
}
