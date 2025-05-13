import java.util.Date;

public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    // Date date = new Date();
    
    public String guestGreeting(String name, int number) {
        // YOUR CODE HERE
        return String.format("Hello %s, how are you %d",name,number);
    }
    public Integer guestGreeting(Integer  num) {
        return (num);
    }
    public Double  guestGreeting(Double n) {
        return (n);
    }
    
    public String dateAnnouncement() {
        Date date = new Date();
        return "Current date is: " + date;
    }
    
    public String respondBeforeAlexis(String conversation) {
        if (conversation.indexOf("Alexis")>-1){
            // System.out.println(conversation.indexOf("s"));
            return("Right away, sir. She certainly isn't sophisticated enough for that");
        }else if (conversation.indexOf("Alfred")>-1){
            return "At your service. As you wish, naturally.";
        }else{

            return "no he is not thare";
        }
    }
    
    // NINJA BONUS
    // See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}