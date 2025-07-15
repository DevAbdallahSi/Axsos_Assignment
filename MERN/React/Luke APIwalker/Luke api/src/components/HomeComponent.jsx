import axios from "axios";
import { useState } from "react";

const HomeComponent = (props) => {
const [formData,setFormData]=useState({type:'people'});

const handelChange =(e) =>{
        e.preventDefault();
    setFormData({...formData,[e.target.name]:e.target.value})
}

    const handelSearsh = (e) => {
    e.preventDefault();

    props.luke(formData.id,formData.type)
    
    }

    return(
        <>
            <form onSubmit={handelSearsh}>
                <label>Searsh for: 
                    <select name="type" onChange={handelChange} >
                        <option  value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                </label>
                <label>ID: 
                    <input type="number" name="id" onChange={handelChange} min={0}/>
                </label>
                <button>Search</button>
            </form>
        </>
    )
}
export default HomeComponent;