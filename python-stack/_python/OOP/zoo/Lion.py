from Animal import Animal

class Lion (Animal):
    def __init__(self, name, age, health_level,happiness):
        super().__init__(name, age, health_level, happiness)


    def feed(self):
        self.health_level += 12
        self.happiness += 12
    