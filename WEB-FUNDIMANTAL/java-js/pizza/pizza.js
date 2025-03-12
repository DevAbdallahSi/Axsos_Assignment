// var typecrust = "sourdough",
// var typesauce  ="london broil",
// var typescheeses  = "lacey swiss cheese",
// var pizzatoppings = ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]

// var pizza = {
//     typecrust:    "sourdough",
//     typesauce:  "london broil",
//     typescheeses:   "lacey swiss cheese",
//     pizzatoppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(pizza);


function PizzaOven (typecrust, typesauce, typescheeses, pizzatoppings){
    var pizza = {};

        pizza.typecrust =  typecrust

        pizza.typesauce = typesauce

        pizza.typescheeses=   typescheeses

        pizza.pizzatoppings= pizzatoppings
    // console.log(pizza);
    return pizza;
    
}
console.log(PizzaOven ("thincrust","tomato",["mozarilla"],["olivis"] ))



var p = PizzaOven ("handtossted","garlicsous",["mozarilla","fita"],["olivis","spanish"] )
console.log(p)

console.log (PizzaOven ("thikside","marinarasus",["mozarilla","fita","shedder"],["olivis","spanish","corn"] ))
