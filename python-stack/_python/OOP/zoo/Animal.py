class Animal:
    def __init__(self, name,age,health,happiness):
        self.name = name
        self.age = age
        self.health_level = health
        self.happiness = happiness


    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Health: {self.health_level}, Happiness: {self.happiness}")
        return self
    def feed(self):
        self.health_level += 10
        self.happiness += 10
        return self