class umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,50,50)
        this.image = loadImage("Screenshot (36).png");
    }
    display(){
        push();
        image(this.image,this.body.position.x,this.body.position.y);
        pop();
    }
}