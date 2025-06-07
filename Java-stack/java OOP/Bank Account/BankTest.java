public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.Deposit(2000.5);
        account1.Deposit(2000.5);
        account1.DepositSaving(2000.5);
        account1.WithdrawSaving(2000.5);
        System.out.println(account1.getSavingsBalance());
        System.out.println(account1.getCheckingBalance());
        System.out.println(BankAccount.getTotalMoney());
        System.out.println(BankAccount.getAccounts());

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney

        // Static Test (print the number of bank accounts and the totalMoney)

    }
}
