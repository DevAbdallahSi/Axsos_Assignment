public class BankAccount {

    // MEMBER VARIABLES
    private double checkingBalance=0;
    private double savingsBalance=0;
    private  int  accountnumber;
    private static int accounts =0;
    private static double totalMoney = 0; // refers to the sum of all bank account checking and savings balances
    
    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(){
        this.accounts+=1;
    }
    
    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public static int getAccounts() {
        return accounts;
    }

    public static void setAccounts(int accounts) {
        BankAccount.accounts = accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    public static void setTotalMoney(double totalMoney) {
        BankAccount.totalMoney = totalMoney;
    }
    

    public double getCheckingBalance() {
        return checkingBalance;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }


    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void  Deposit(double salary){
        checkingBalance += salary;
        totalMoney += salary;
    }
    public void  DepositSaving(double savings){
        savingsBalance += savings;
        totalMoney += savings;

    }
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    public double Withdraw(double salary){
        if(checkingBalance > salary){
            checkingBalance -= salary;
            totalMoney -= salary;

        }
        return checkingBalance;
    }
    public double WithdrawSaving(double savings){
        if(savingsBalance >= savings){
        savingsBalance -= savings;
        totalMoney -= savings;
    }   
    return savingsBalance;
    } 
// getBalance
// - display total balance for checking and savings of a particular bank account
public void  getBalance(){
    totalMoney = savingsBalance + checkingBalance;
}
}