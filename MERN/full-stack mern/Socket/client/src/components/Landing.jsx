import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Landing = () => {
    const [user, setUser]=useState([])
    // const navigate = useNavigate();

    const handelCreate = () =>{
    }
    return (
        <>
            <h1>Mern Chat</h1>
            <div>
                <h2>Get Started right now!</h2>
                <form onSubmit={handelCreate}>
                    <label>I want to start chatting with the name...
                        <input type="text"/>
                        <button>Start </button>
                    </label>
                </form>
            </div>
        </>
    )
}
export default Landing;