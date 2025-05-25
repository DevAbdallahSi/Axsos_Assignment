public class Sculpture extends Art {
    private String material;


public Sculpture(String title, String author, String description,String material) {
        super(title, author, description);
        this.material = material;
    }    
    @Override
    public void viewArt(){
        System.out.println("this is A Sculpture class to made awsone Sculpture");
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }
}
