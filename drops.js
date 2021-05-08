class drops{
   
        constructor(x,y){
        var options={
          friction:0.001,
          restitution:1
        
               }
         this.radius=7;
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
        }
        updatey(){
          if(this.body.position.y>700){
            Matter.Body.setPosition(this.body,{
              x:random(0,480),
              y:random(0,700)
            })

          }
        }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            //noStroke();
           fill("blue");
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.radius);
            pop();
            
            
            }
            
        
}