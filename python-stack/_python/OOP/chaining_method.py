class User :
    def __init__(self , user_name ,balance):
        self.user_name=user_name
        self.balance=balance
    def deposit(self,amount):
        self.balance+=amount
        return self
    def withdrawal(self,amount):
        self.balance-=amount
        return self
    def display_user_balance(self):
        print(self.user_name + " " +str(self.balance))
        return self
    def transfer_mony(self,other_user,amount):
        self.balance-=amount
        other_user.balance +=amount
        return self
 
salhi=User("abdallah salhi",9000)
frehat=User("abdallah frehat",9900)
bahaa=User("bahaa enab",3000)
 
salhi.deposit(1000).deposit(1000).deposit(1000).withdrawal(500)

frehat.deposit(1000).deposit(1000).withdrawal(500).withdrawal(500)
 
bahaa.deposit(1000).withdrawal(500).withdrawal(500).withdrawal(500)
 
salhi.transfer_mony(bahaa,200).display_user_balance()
frehat.display_user_balance()
bahaa.display_user_balance()
   
       
       
 