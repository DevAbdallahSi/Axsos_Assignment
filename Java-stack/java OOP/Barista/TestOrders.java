

public class TestOrders {
    public static void main(String[] args) {
    // ArrayList<Item> items = new ArrayList<>();

    Order order1 = new Order();
    Order order5 = new Order();
    Order order6 = new Order("ahmad");
    Order order7 = new Order("abdllah");
    Order order8 = new Order("yazan");
    // Order order2 = new Order("jimmy",20.22,true,items);
    // Order order3 = new Order("noah",20.22,true,items);
    // Order order4 = new Order("sam",20.22,true,items);


    Item item1 = new Item("mocha",20.22);
    Item item2 = new Item("latte",15.15);
    Item item3 = new Item("drip coffee",10.8);
    Item item4 = new Item("cappuccino",17.7);
    
        order1.addItem(item1);
        order1.addItem(item2);
        order1.addItem(item3);
        order1.getOrderTotal();
        order1.setReady(true);

        order6.addItem(item4);
        order6.addItem(item3);
        order6.getOrderTotal();

        order7.addItem(item2);
        order7.addItem(item2);
        order7.getOrderTotal();
        order7.setReady(true);
        
System.out.println(order1.getStatusMessage());
        order8.addItem(item4);
        order8.addItem(item2);
        order8.getOrderTotal();
        order8.setReady(true);
System.out.println("---------------------------------------------");
        order1.display();
        System.out.println("---------------------------------------------");

        order6.display();
        System.out.println("---------------------------------------------");

        order7.display();
        System.out.println("---------------------------------------------");

        order8.display();

}
}