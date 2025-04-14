class BankAccount:

    def __init__(self,int_rate, balance=0):
        self.int_rate=int_rate
        self.balance=balance
    def deposit(self, amount):
        self.balance+=amount
        return self
    def withdraw(self, amount):
        self.balance-=amount
        return self
    def display_account_info(self):
        print(" " +str(self.balance))
        return self       
    def yield_interest(self):
        self.balance += self.balance*(self.int_rate/100)
        return self

# AccountA=BankAccount(2,1000)
# AccountB=BankAccount(2,1000)

# AccountA.deposit(2000).deposit(1500).deposit(5000).withdraw(2000).yield_interest().display_account_info()
# AccountB.deposit(1000).deposit(1000).withdraw(1000).withdraw(800).withdraw(2000).withdraw(1000).yield_interest().display_account_info()





