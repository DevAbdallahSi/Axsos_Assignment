console.log("page loaded...");
function clickMe(){
    var changing= document.querySelector("#change-name")
    changing.innerText = "Abdallah"
}
function removeRequest(num){
    var person = document.getElementById("friend-request"+num)
    person.remove();
    var requestNum=document.querySelector("#numOfRequest");
    requestNum.innerText--;
}
function acceptRequest(num){
    var person = document.getElementById("friend-request"+num)
    person.remove();
    var requestNum=document.querySelector("#numOfRequest");
    requestNum.innerText--;
    var acceptReq =document.getElementById("numOfFriends");
    acceptReq.innerText++;
}