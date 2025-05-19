import java.util.ArrayList;
import java.util.Random;
public class Puzzle {
    Random randMachine = new Random();

    public void getTenRolls(ArrayList<Integer> RandomNums){
        for (int i = 0; i < 10; i++) {
            RandomNums.add((int)(Math.random()*21));
        }
        }
    public void getRandomLetter(char[] letter){
    for (int i = 0; i < 26; i++) {
        letter[i] = (char) (i+'a');
    }
    }
}

