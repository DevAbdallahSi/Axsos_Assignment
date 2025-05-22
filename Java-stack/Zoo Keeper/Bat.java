public class Bat extends Mammals {

    public Bat(){
        super(300);
    }
    
    public void fly(){
        super.setEnergylevel(super.getEnergylevel()-50);
                System.out.println("the bat is flying ");
    }
    public void eatHumans(){
        super.setEnergylevel(super.getEnergylevel() + 25);
                System.out.println("bat's level of satisfaction.is great.");

    }
    public void attackTown(){
        super.setEnergylevel(super.getEnergylevel()-100);
                System.out.println("the bat has attack a town.");

    }
}
// super.somthing is for get atripute or methods 
// super() is for calling the constructer
