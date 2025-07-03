import  {React, useState } from "react";

const IncreaseAge =(props) => {
    const {firstName, lastName, age, hairColor}=props;

    const[myAge, setAge] = useState(age);
    return<>
    <h1>{firstName} , {lastName}</h1>
    <h3> Age: {myAge}</h3>
    <h4>hairColor: {hairColor}</h4>
    <button onClick={() => setAge(myAge+2)}>Birth day button for {firstName}</button>
    
    <button onClick={() => setAge(age)}>Reset Age {firstName}</button>
    </>
}
export default IncreaseAge;