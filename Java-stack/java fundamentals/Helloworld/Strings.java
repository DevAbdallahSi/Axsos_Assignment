
public class Strings {
    public static void main(String[] args){
        // Predict the output
        String message;
        String output;
        message = "Hello there!";
        output = String.format("Message %d: %s", 1, message.concat(" How are you doing today?"));
        System.out.println(output);
    }
}