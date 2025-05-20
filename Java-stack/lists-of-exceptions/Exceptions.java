import java.util.ArrayList;

public class Exceptions {
    public static void main(String[] args) {
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("Abdallah");
        myList.add("ahmad");
        myList.add(25);
        myList.add(22.52);
        myList.add(true);

        for (int i = 0; i < myList.size(); i++) {
            try {
                Integer castedValue = (Integer) myList.get(i);
                System.out.println("Casted value: " + castedValue);
            } catch (ClassCastException e) {
                System.out.println(" Cannot cast \"" + myList.get(i) + "\" to Integer.");
            }
            
        }
    }
}
