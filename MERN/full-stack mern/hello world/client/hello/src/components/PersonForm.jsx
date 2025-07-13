import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    //handler when the form is submitted
   const onSubmitHandler = e => {
    e.preventDefault();

    // Simple frontend validation (optional but recommended)
    if (firstName.trim() === '' || lastName.trim() === '') {
        alert("First and Last names are required!");
        return;
    }

    axios.post('http://localhost:8000/api/people', {
        firstName,
        lastName
    })
    .then(res => {
        console.log(res);
        // Optionally clear form on success
        setFirstName("");
        setLastName("");
    })
    .catch(err => {
        if (err.response?.data?.errors) {
            const errorMessages = Object.values(err.response.data.errors).map(e => e.message);
            alert("Errors:\n" + errorMessages.join("\n"));
        } else {
            console.log(err);
        }
    });
};
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
