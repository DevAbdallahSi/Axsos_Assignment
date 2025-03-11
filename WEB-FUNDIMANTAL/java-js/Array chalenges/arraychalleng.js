function alwaysHungry(arr) {
    var batata = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            batata.push("yummy");
        }
    }
 
    if (batata.length == 0) {
        return "im hungry"
    }
    return batata;
}
// console.log(alwaysHungry([4, "food", 5, "food", 2]));
 
function highPass(arr, num) {
    var arrhigh = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            arrhigh.push(arr[i]);
        }
    }
    return arrhigh;
}
//var result =highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);
 
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    var average = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    average = sum / arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);
function reverse(arr) {
    // your code here
    var counter=arr.length-1;
    var temp=0;
    for(var i= 0;i<arr.length/2;i++){
       temp= arr[counter];
       arr[counter]=arr[i];
       arr[i]=temp;
       counter--;
    }
    return arr;
}
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);
 
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i=2;i<n;i++){
        fibArr[i]=fibArr[i-1]+fibArr[i-2]
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); 