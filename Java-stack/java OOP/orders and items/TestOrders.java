public class TestOrders {
    public static void main(String[] args) {
    Order order1 = new Order();
        order1.name = "Rami";
            // System.out.println(order1.name+);
    Order order2 = new Order();
            order2.name = "Jimmy";

    Order order3 = new Order();
            order3.name = "Noah";

    Order order4 = new Order();
        order4.name = "Sam";



    Item item1 = new Item();
        item1.name="mocha";
        item1.price= 20;

    Item item2 = new Item();
        item2.name="latte";
        item2.price= 15;
    Item item3 = new Item();
        item3.name="drip caffee";
        item3.price= 10;

    Item item4 = new Item();
        item4.name="capuccino";
        item4.price= 17;


        order1.items.add(item1);
        order1.total =+ item1.price;
        order1.ready=true;
        order3.items.add(item4);
        order3.total+=item4.price + item2.price;
        order4.items.add(item2);
        order4.total+=item2.price*2;
        order4.ready=true;

        
        // Order variables -- order1, order2 etc.
    
        // Application Simulations
    //     // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);
        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);
    }
}