from BankAccount import BankAccount
class User :
    def __init__(self , user_name ):
        self.user_name=user_name
        self.account = BankAccount(int_rate=0.02, balance=0)    # added this line
    def deposit(self,amount):
        self.account.deposit(amount)
        return self
    def withdrawal(self,amount):
        self.account.withdraw(amount)
        return self
    def display_user_balance(self):
        print(self.user_name + " " +str(self.account.balance))
        return self
    def transfer_money(self,other_user,amount):
        self.account.balance-=amount
        other_user.account.balance +=amount
        return self

salhi=User("abdallah salhi")
frehat=User("abdallah frehat")
bahaa=User("bahaa enab")

salhi.deposit(10000).deposit(1000).deposit(1000).withdrawal(500)

frehat.deposit(1000).deposit(1000).withdrawal(500).withdrawal(500)
 
bahaa.deposit(1000).withdrawal(500).withdrawal(500).withdrawal(500)
 
salhi.transfer_money(bahaa,200).display_user_balance()
frehat.display_user_balance()
bahaa.display_user_balance()
   
       
       
 