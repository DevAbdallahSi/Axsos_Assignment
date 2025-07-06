import React,{useState} from "react";

const MessageForm=(props)=>{
    const [msg, setMsg]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
            props.onNewMessage( msg );
    }
return(
    <form onSubmit={handleSubmit} >
        <h1>Set Message</h1>
        <textarea rows="4" cols="50" placeholder="Enter Your Message Here" onChange={ (e) => setMsg(e.target.value) } value={msg}></textarea>
        <input type="submit" value="send Message" />
    </form>
)
}
export default MessageForm;