from BankAccount import BankAccount

class User :
    def __init__(self , user_name ):
        self.user_name=user_name
        self.account = BankAccount(1)

    def deposit_with_user(self,amount):
        self.account.deposit(amount),self.account.display_account_info()
        return self
    def withdrawalt_with_user(self,amount):
        self.account.withdraw(amount)
        return self
    def display_user_balance(self):
        print(self.user_name + self.account.display_account_info())
        return self
    # def transfer_mony(self,other_user,amount):
    #     self.balance-=amount
    #     other_user.balance +=amount
    #     return self

 
A_user = User("ahmad")

A_user.deposit_with_user(1000)
# salhi=User("abdallah salhi",9000)
# frehat=User("abdallah frehat",9900)
# bahaa=User("bahaa enab",3000)
 
# salhi.deposit(1000).deposit(1000).deposit(1000).withdrawal(500)

# frehat.deposit(1000).deposit(1000).withdrawal(500).withdrawal(500)
 
# bahaa.deposit(1000).withdrawal(500).withdrawal(500).withdrawal(500)
 
# salhi.transfer_mony(bahaa,200).display_user_balance()
# frehat.display_user_balance()
# bahaa.display_user_balance()
   
       
       