import java.util.ArrayList;

public class CoffeeKiosk {
    public  ArrayList<Item> menu = new ArrayList<>();
    public ArrayList<Order> orders = new ArrayList<>();

    public CoffeeKiosk(){
        this.menu = new ArrayList<>();
        this.orders = new ArrayList<>();
    }
    public void addMenuItem(String name, double price){
        Item one = new Item(name, price);
        menu.add(one);
    }
    public void displayMenu(){
        for (int i = 0; i < menu.size(); i++) {
            System.out.println(i+ " "+ menu.get(i).getName()+"--  $"+menu.get(i).getPrice());
        }
    }
public void newOrder() {
        
        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
        // Your code:
        // Create a new order with the given input string
        // Show the user the menu, so they can choose items to add.
        Order orderone = new Order(name);
        displayMenu();   
        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")){
            int index = Integer.parseInt(itemNumber);
            orderone.addItem(menu.get(index));
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();

            // Get the item object from the menu, and add the item to the order
            // Ask them to enter a new item index or q again, and take their input
        }
        // After you have collected their order, print the order details 
        orderone.getOrderTotal();
        orderone.display();
    }
}