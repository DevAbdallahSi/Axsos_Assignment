class Ninja {
    constructor(name,health,speed=2,strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength
    }
    sayName (){
        console.log(this.name);
        
    }       
    showStatus (){
        console.log(this.name,this.health,this.speed,this.strength);
        
    } 
    drinkSake (){
        this.health +=10;
        // console.log(this.health);
        
    }
}
    const dojo =new Ninja("ahmad",80,8);
    // dojo.sayName()
    // dojo.showStatus()
    dojo.drinkSake()
    console.log(dojo);
    

