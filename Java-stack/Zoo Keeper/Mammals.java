public class Mammals {

    private int energylevel;

    public  Mammals(){
        this.energylevel=100;
    }

    public Mammals(int ammount){
        this.energylevel=ammount;
    }

    public void displayEnergy(){
        System.out.println(".the energylevel is "+this.energylevel);
    }

    public int getEnergylevel() {
        return energylevel;
    }

    public void setEnergylevel(int energylevel) {
        this.energylevel = energylevel;
    }
}