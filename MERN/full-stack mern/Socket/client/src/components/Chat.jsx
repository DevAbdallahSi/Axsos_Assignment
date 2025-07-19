import io from "socket.io-client"
import { useState,useEffect } from "react"
const Chat = ()=>{
 const [msg, setMsg] = useState("")
  const [socket]=useState(()=> io(":8000"))

  useEffect(()=>{
    console.log("test this");
    socket.on('send data', data => setMsg(data));
        return () => socket.removeAllListeners;
    
  },[socket])

  const sendData=(msg)=>{
    socket.emit('test',msg)
  }

  return (
    <>
     <h1>{msg}</h1>
     
     <button onClick={()=>sendData("hellow from socket")}>send data</button>
    </>
  )
}
export default Chat;