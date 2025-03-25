class User :
    def __init__(self , user_name ,balance):
        self.user_name=user_name
        self.balance=balance
    def deposit(self,amount):
        self.balance+=amount
    def withdrawal(self,amount):
        self.balance-=amount
    def display_user_balance(self):
        print(self.user_name + " " +str(self.balance))
    def transfer_mony(self,other_user,amount):
        self.balance-=amount
        other_user.balance +=amount
 
salhi=User("abdallah salhi",5000)
frehat=User("abdallah frehat",7000)
bahaa=User("bahaa enab",3000)
 
salhi.deposit(1000)
salhi.deposit(1000)
salhi.deposit(1000)
salhi.withdrawal(500)
 
frehat.deposit(1000)
frehat.deposit(1000)
frehat.withdrawal(500)
frehat.withdrawal(500)
 
bahaa.deposit(1000)
bahaa.withdrawal(500)
bahaa.withdrawal(500)
bahaa.withdrawal(500)
 
salhi.transfer_mony(bahaa,200)
salhi.display_user_balance()
frehat.display_user_balance()
bahaa.display_user_balance()
   
       
       
 