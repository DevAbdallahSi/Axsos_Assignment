from Zoo import Zoo
from Bear import Bear
from Lion import Lion
from Tiger import Tiger


zoo1 = Zoo("John's Zoo")

zoo1.add_animal(Lion("Nala",25,2,5))
zoo1.add_animal(Lion("Simba",25,2,5))
zoo1.add_animal(Bear("Rajah" ,25,2,5,"white"))
zoo1.add_animal(Tiger("Shere Khan" ,25,2,5))
zoo1.print_all_info()

