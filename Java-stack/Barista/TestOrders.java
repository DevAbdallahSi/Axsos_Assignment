
import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {
    Order order1 = new Order();
    Order order5 = new Order();
    Order order6 = new Order("ahmad");
    Order order7 = new Order("abdllah");
    Order order8 = new Order("yazan");
    System.out.println(order1.getName());
    ArrayList<Item> items = new ArrayList<>();


    Item item1 = new Item("mocha",20.22);
    Item item2 = new Item("latte",15.155);
    Item item3 = new Item("drip coffee",10.8);
    Item item4 = new Item("cappuccino",17.7);
    
    items.add(item1);
    items.add(item2);
    items.add(item3);
    items.add(item4);
    Order order2 = new Order("jimmy",20.22,true,items);

    Order order3 = new Order("noah",20.22,true,items);

    Order order4 = new Order("sam",20.22,true,items);

        order1.addItem(item1);
        order1.addItem(item2);
        order1.addItem(item3);
        order1.total =+ item1.getPrice();
        order1.getOrderTotal(items);
        order1.setReady(true);
        order3.addItem(item4);
        order3.total+=item4.getPrice() + item2.getPrice();
        order4.addItem(item2);
        order4.total+=item2.getPrice()*2;
        order4.setReady(true);

        System.out.printf("Name: %s\n", order1);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.isReady());
        System.out.printf("Name: %s\n", order3);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.isReady());
        System.out.printf("Name: %s\n", order4);
        System.out.printf("Total: %s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.isReady());
    }
}