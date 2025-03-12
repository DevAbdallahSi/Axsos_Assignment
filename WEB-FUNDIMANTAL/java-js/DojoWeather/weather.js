function choseSity(){
    alert("you have changed the location");
}
function hideMassage(){
    var hide =document.getElementById("removeMe");
    hide.remove();
}
function changeUnit(){
    var fehren =document.getElementById("temperature");
    fehren.innerText="f";
}
function changevalue(){
    var changeTemperatuer=document.querySelector(".highttemp");
    changeTemperatuer.innerText=50;
}