function press(num){
    var disolayText =document.getElementById("display")
    if ( disolayText.innerText==0)   {
        disolayText.innerText=num
    }else if(disolayText.innerText !=0 ){
        disolayText.innerText=disolayText.innerText+num

    }
}           
var disolayText = document.getElementById("display")
    var firstNumber = disolayText.innerText
function setOP(simbol){
    disolayText 
    firstNumber 
    var opx = simbol
    disolayText.innerText=0
}
console.log(setOP)
// function calculate(){
    
//     // var result = document.getElementById("equals").innerText;
//     // result=    disolayText.innerText +firstNumber

// }





function clr (){
    document.getElementById("display").innerText="0"
}