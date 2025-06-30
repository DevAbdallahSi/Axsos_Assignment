class Ninja {
    constructor(name,health=50,speed=2,strength=3){
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
    const dojo =new Ninja("ahmad");
    // dojo.sayName()
    // dojo.showStatus()
    // dojo.drinkSake()
    // console.log(dojo);
    

class Sensei extends Ninja{
    constructor(wisdom){
        super("abood",200,10,10)
        this.wisdom=10;
    }
    speakWisdowm(){
        super.drinkSake();
    }
}
const shadow = new Sensei(10)
shadow.speakWisdowm()
console.log(shadow);

