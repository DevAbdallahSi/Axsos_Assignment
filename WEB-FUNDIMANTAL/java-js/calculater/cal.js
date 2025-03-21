function press(num){
    var disolayText =document.getElementById("display")
    if ( disolayText.innerText==0)   {
        disolayText.innerText=num
    }else if(disolayText.innerText !=0 ){
        disolayText.innerText=disolayText.innerText+num

    }
}           

function setOP(simbol){
    var disolayText = document.getElementById("display")
    var firstNumber = disolayText.innerText
    var opx = simbol
    disolayText.innerText=0
    

}
function calculate(el){
    var result = document.getElementById("equals").innerText;
    // console.log(result)
    press()
    setOP()
    console.log(calculate)
}





function clr (){
    document.getElementById("display").innerText="0"
}