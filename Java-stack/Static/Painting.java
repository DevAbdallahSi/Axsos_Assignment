public class Painting extends Art {
    private String paintType;

    public Painting(String title, String author, String description,String paintType) {
        super(title, author, description);
        this.paintType = paintType;
    }
    @Override
    public void viewArt(){
        System.out.println("this is A Painting class to made awsone Arts");
    }

    public String getPaintType() {
        return paintType;
    }

    public void setPaintType(String paintType) {
        this.paintType = paintType;
    }
}
