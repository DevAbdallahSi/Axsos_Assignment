import java.util.ArrayList;
import java.util.Arrays;
public class TestPuzzleJava {
    
    public static void main(String[] args) {
        Puzzle generator = new Puzzle();

        // System.out.println(Arrays.toString(generator.getTenRolls()));
        
        // System.out.println(generator.getRandomLetter());
        // System.out.println(generator.generatePassword());
        System.out.println(Arrays.toString(generator.generateRandomWords(5)));
        

    }
}
