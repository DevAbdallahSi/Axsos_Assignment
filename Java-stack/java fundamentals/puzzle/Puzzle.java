import java.util.ArrayList;
import java.util.Random;
public class Puzzle {
    Random randMachine = new Random();
    // public void getTenRolls(ArrayList<Integer> RandomNums){
    //     for (int i = 0; i < 10; i++) {
    //         RandomNums.add((int)(Math.random()*21));
    //     }
    //     }
    int[] num = new int[10];
    public int[] getTenRolls(){
        for (int i = 0; i < 10; i++) {
            int res = randMachine.nextInt(20)+1;
            num[i]=res;
        }
        return num;
    }
        
    // public void getRandomLetter(char[] letter){
    // for (int i = 0; i < 26; i++) {
    //     letter[i] = (char) (i+'a');
    // }
    // }
    // char letter = (char)(((int)(Math.random()*26))+'a');
    //     return letter;
    char[] letter = new char[26];
    public char getRandomLetter(){
        for (int i = 0 ; i <26 ; i++) {
            letter[i] = (char) (i+'a'); 
        }
        
        int number = randMachine.nextInt(26);
        return letter[number];
    }
    
    public String generatePassword(){
        char[] pass = new char[8];
                String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (int i = 0; i < 8; i++) {
            int passnum=randMachine.nextInt(chars.length());
            pass[i] = chars.charAt(passnum);
        }
        String s = new String(pass);
        return s;
    }
    public String[] generateRandomWords(int numberOfWords){
    String[] randomStrings = new String[numberOfWords];
    Random random = new Random();
    for(int i = 0; i < numberOfWords; i++)
    {
        char[] word = new char[random.nextInt(1)+8]; // words of length 8 through int numberOfWords . (1 and 2 letter words are boring.)
        for(int j = 0; j < word.length; j++)
        {
            word[j] = (char)('a' + random.nextInt(26));
        }
        randomStrings[i] = new String(word);
    }
    return randomStrings;

    }
}

