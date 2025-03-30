

class User:

    def __init__(self, firstname, lastname, score):
        self.firstname = firstname
        self.lastname = lastname
        self.score = score

    def add_score(self, val):
        self.score = self.score + val
        return self
    
    def remove_score(self, val):
        self.score = self.score - val
        return self

adballah = User("Abdallah" , "Salhi" , 100)
print(adballah.add_score(200).remove_score(100).add_score(500).score)