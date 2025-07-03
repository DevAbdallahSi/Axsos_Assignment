import { useState } from "react";

const PersonCard = (props) =>{
    const{firstName,lastName,age,hairColor}=props
    // let a=0
    const [bata,setBata]=useState([]);
    return <>
    <h1>{firstName} {lastName}</h1>
    <p>age:{age}</p>
    <p>hairColore:{hairColor}</p>
    <button onClick={()=> alert("hellow")}>click me</button>
    <button onClick={()=> setBata(bata+1)}>click me</button>
    <p>u have klicked the button {bata} times</p>
    </>
}
export default PersonCard;

console.log();
