function changetext(element){
    
    if( element.innerText==="login"){
        element.innerText = "logout"
    }
    else{
        element.innerText= "login"
    }

        
    
}

function alertme(element){
    alert("ninja was liked")
}
// function hide(element){
//     element.remove();
// }
function hide(){
    var pass =document.getElementById("deletMe");
    pass.remove();
}
