import java.util.ArrayList;

public class Museum {
    public static void main(String[] args) {
ArrayList<Art> museum = new ArrayList<Art> ();
        // TODO: create paintings and sculptures here
        Sculpture jesus = new Sculpture("Jesus Sculpture" ,"jack","Sculpture art of jesus","Porcelain");
        Sculpture noah = new Sculpture("noah Sculpture" ,"martin","Sculpture art of noah","Marble");

        Painting flower = new Painting("Flower art" ,"leonardo","art of flower painting","oil"); 
        Painting face = new Painting("face art" ,"leonardo davinche","art of monalesa painting","oil and Acrylic"); 
        Painting house = new Painting("house art" ,"leonardo dekabreo","art of house painting","Watercolor"); 
        // System.out.println(jesus.getAuthor()+jesus.getTitle());
        museum.add(jesus);
        museum.add(noah);
        museum.add(flower);
        museum.add(face);
        museum.add(house);
        museum.forEach( (n) -> { System.out.println(n.getAuthor()); } );
        }
    
    }


