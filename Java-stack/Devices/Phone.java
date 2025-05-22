public class Phone extends Device {
    

    public void makeCall(){
        if(this.battery>=5){
        this.battery -=5;
        }else{
            System.out.println("your phone is run out of battery");
        }
        
        // displayBatteryLife();
    }
    public void playGame(){
        if(this.battery>=20){
        this.battery -=20;
        }else{
            System.out.println("your phone is run out of battery");
        }
        // displayBatteryLife();
    }
    public void charge(){
        if(this.battery <= 50){
        this.battery += 50;
        }else{
            System.out.println("your phone battery is grater than 50 play some game");
        }
        // displayBatteryLife();
    }
}
