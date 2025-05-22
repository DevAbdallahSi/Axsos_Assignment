public class Gorilla extends Mammals{
    
    // public Gorilla (){
    //     energylevel=300;
    // }

    public void throwSomething(){
        super.setEnergylevel(super.getEnergylevel()-5);
                System.out.println("the gorilla has thrown an object");
    }
    public void eatBananas(){
        super.setEnergylevel(super.getEnergylevel() + 10);
                System.out.println("gorilla's level of satisfaction.is great.");

    }
    public void climb(){
        super.setEnergylevel(super.getEnergylevel()-10);
                System.out.println("the gorilla has climbed a tree.");

    }
}
