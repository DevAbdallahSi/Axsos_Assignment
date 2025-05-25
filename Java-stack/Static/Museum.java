public class Museum {
    public static void main(String[] args) {
        // TODO: create paintings and sculptures here
        Sculpture jesus = new Sculpture("Jesus Sculpture" ,"jack","Sculpture art of jesus","Porcelain");
        Sculpture noah = new Sculpture("noah Sculpture" ,"martin","Sculpture art of noah","Marble");

        Painting flower = new Painting("Flower art" ,"leonardo","art of flower painting","oil"); 
        Painting face = new Painting("face art" ,"leonardo davinche","art of monalesa painting","oil and Acrylic"); 
        Painting house = new Painting("house art" ,"leonardo dekabreo","art of house painting","Watercolor"); 
        System.out.println(jesus.getAuthor()+jesus.getTitle());
    }
}

