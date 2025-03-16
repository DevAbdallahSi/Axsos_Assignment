// sity alert function
function choseSity(el){
    alert("you have changed the location to "+el.innerText);
}

// remove cookies function 
function hideMassage(){
    var hide =document.getElementById("removeMe");
    hide.remove();
}


// change temperature function 

function changeValue() {
    var x = document.getElementById("temperatureUnit").value;
    for( var i =1 ; i<=8 ; i++){
        var temperatur = document.getElementById("temp"+i)
        if(x === "C"){
            var result=Math.round((temperatur.innerText -32)*5/9)
        }else if ( x === "F")  {
            var result = Math.round( temperatur.innerText * 9/5)+32
            
        }
        temperatur.innerText =  Math.trunc(result)


        console.log (result)

    }
    return result

}


// C to F: F = (C × 9/5) + 32
// F to C: C = (F - 32) × 5/9
