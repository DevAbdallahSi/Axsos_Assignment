from Animal import Animal

class Bear(Animal):
    def __init__(self, name, age,health,happinnes,color):
        super().__init__(name, age, health ,happinnes)
        self.color = color

    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Health: {self.health_level}, Happiness: {self.happiness}, color:{self.color}")   
        return self
