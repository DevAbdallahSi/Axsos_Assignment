public class ReverseWords {
    public static void main(String[] args) { 
        String s = "the sky is  blue  ";
        s = s.trim(); // Step 1: Remove leading/trailing spaces
        String[] words = s.split("\\s+"); // Step 2: Split by one or more spaces

        StringBuilder newWord = new StringBuilder(); // Step 3: Use StringBuilder to construct result

        for (int i = words.length - 1; i >= 0; i--) {
            newWord.append(words[i]);
            if (i != 0) {
                newWord.append(" ");
            }
        }

        // Step 4: Print the reversed sentence
        System.out.println(newWord.toString());
    }
}
