public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        int dripCoffee = 20;
        int latte = 50;
        int cappuccino = 25;
        // Customer name variables (add yours below)
        String customer1 = "Shatha";
        String customer2 = "Ahmad";
        String customer3 = "Ali";
        String customer4 = "Sali";
        String customer5 = "Adam";

        
        // Order completions (add yours below)
        boolean isReadyOrderAdam = true;
        boolean isReadyOrderSali = true;
        boolean isReadyOrderAhmad = true;
        boolean isReadyOrderAli = true;
        boolean isReadyOrderShatha = true;
                            
        System.out.println(generalGreeting + customer1);
        if (isReadyOrderSali){
            System.out.println(customer4 + readyMessage + displayTotalMessage +""+cappuccino );
        }else{
            System.out.println(customer4 + pendingMessage);
        }
        if (isReadyOrderAhmad){
            System.out.println(customer2 + readyMessage + displayTotalMessage +""+latte );
        }else{
            System.out.println(customer2 + pendingMessage);
        }
        if (isReadyOrderAli){
            System.out.println(customer3 + readyMessage + displayTotalMessage +""+(mochaPrice + latte));
        }else{
            System.out.println(customer3 + pendingMessage);
        }
        if (isReadyOrderShatha){
            System.out.println(customer1 + readyMessage + displayTotalMessage +""+dripCoffee );
        }else{
            System.out.println(customer1 + pendingMessage);
        }
        if (isReadyOrderAdam){
            System.out.println(customer5 + readyMessage + displayTotalMessage +""+(mochaPrice-cappuccino));
        }else{
            System.out.println(customer5 + pendingMessage);
        }
    }
}