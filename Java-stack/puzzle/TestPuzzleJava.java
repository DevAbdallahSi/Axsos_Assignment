import java.util.ArrayList;
public class TestPuzzleJava {
    
    public static void main(String[] args) {
        Puzzle generator = new Puzzle();
        ArrayList<Integer> ranNums = new ArrayList<>();
        generator.getTenRolls(ranNums);
        System.out.println(ranNums);
        char [] letter = new char[26];
        generator.getRandomLetter(letter);
        System.out.println(letter);
    }
}
