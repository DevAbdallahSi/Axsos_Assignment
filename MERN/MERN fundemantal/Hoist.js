// console.log(example);
// let example = "i am the example";

// This creates a Temporal Dead Zone (TDZ) — 
// a period from the start of the block until the variable is declared, where accessing the variable throws an error.
// >>
// let example ;not initialized**
// console.log(example);
// example = "i am the example"
// outbut is >> ReferenceError

// Hoisted:
// let example; // (declared but uninitialized — in the TDZ)
// console.log(example); //  Error: example is in TDZ
// example = "i am the example"; // assignment (never reached)

// *********************************************// *********************************************


// console.log(hello);
// var hello = "world";

// var hello:Hoisted         var hello;            // declaration hoisted
// console.log(hello);       console.log(hello);   //  it's undefined at this point
// outbut is undefined       hello = "world";      // assignment happens here

// *********************************************// *********************************************

// global variable 
// var needle = 'haystack';
// test();
// function test(){
//     // local scope variable
//     var needle = 'magnet';// this is excuted
//     console.log(needle);
// }
// outbut is magnet

// *********************************************// *********************************************

// var brendant = 'super cool';//global variable
// function print(){
//     brendant = 'only okay'; //this affects the global variable
//     console.log(brendant);
    
// }
// console.log(brendant);
// print();//this print the function 

// outbut super cool because the function is never called 

// *********************************************// *********************************************

// var food = 'chicken';//global variable 
// console.log(food); //print chicken
// eat(); //call the function
// function eat(){ 
//     food='half-chicken'; //dont hav a initializer but it afect the glopal variable  *****local food is used (because of hoisting)
//     console.log(food); // print half chicken
//     var food = 'gone';//declare after the print so it hosted and dont afect the result
// }
// // outbut is chicken then half chicken 

// function eat() {
//     var food;               // hoisted — now it's local
//     food = 'half-chicken';  // local food is now 'half-chicken'
//     console.log(food);      // prints 'half-chicken'
//     food = 'gone';          // local food is updated to 'gone' later
// }

// *********************************************// *********************************************

// mean();  ********calling the function before it's defined
// console.log(food);
// var mean = function(){  ****function expression, not a function declaration.
//     food="chicken";       ****Only the var mean declaration is hoisted — not the function body.
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// //this is gona make error because the function is call befor it declare and canote sit var for it

// var mean; // hoisted, but still undefined

// mean();   //  TypeError: mean is not a function

// ********
// var mean;              // hoisted as undefined

// mean();                // ❌ mean is undefined → TypeError

// console.log(food);     // Never runs (error above stops execution)

// mean = function() {
//     food = "chicken";  // Assigns to local `food`
//     console.log(food); // "chicken"
//     var food = "fish"; // local variable (hoisted)
//     console.log(food); // "fish"
// };

// console.log(food);     // Never runs

// *********************************************// *********************************************

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind(){
//     genre="rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// // outbut is >> 
// // hoisted var genre;
// // console.log(genre);
// // genre="disco" it is undefined;

// // function>>  rewind 
// // hosted var genre
// // genre="rock"
// // print rock 
// // genre="r&b" 
// // print r&b 
// // print disco

// *********************************************// *********************************************

// dojo ="san jose"; //❗assigns to global (even without var, let, or const) 
// console.log(dojo); // print san jose
// learn();  //call the function 
// function learn(){  // declare the function
//     dojo="seattle";  //>> local vareable
//     console.log(dojo);
//     var dojo ="burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//>>  hosted var dojo;
//print  seattle
// then it print burbank 
//then it it print san jose 

// *********************************************// *********************************************

// console.log(makeDojo("chicago",65));
// // console.log(makeDojo("tann",0));
// function makeDojo(name,student){
//     const dojo={};//***********************You can change its properties
//                                    //     But you cannot reassign the whole variable to a new value (like a string)
//     dojo.name=name;
//     dojo.student=student;
//     if (dojo.student>50){
//         dojo.hiring=true;
//     }
//     else if(dojo.student<50){
//         dojo="closed for now";
//     }
//     return dojo;
// }
// // outbut is >>
// // true then false

// *********************************************// *********************************************




