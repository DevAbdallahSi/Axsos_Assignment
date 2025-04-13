from BankAccount import BankAccount
class User :
    def __init__(self , user_name ):
        self.user_name=user_name
        self.account = BankAccount(int_rate=0.02, balance=0)   
    def make_deposit(self, amount):
        self.account+=(amount)
        return self
    def make_withdraw(self, amount):
        self.account-=(amount)
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

salhi.make_deposit(10000).make_deposit(1000).make_deposit(1000).make_withdraw(500)
salhi.display_user_balance()
# salhi.account.make_deposit(1000)

# frehat.deposit(1000).deposit(1000).withdrawal(500).withdrawal(500)


