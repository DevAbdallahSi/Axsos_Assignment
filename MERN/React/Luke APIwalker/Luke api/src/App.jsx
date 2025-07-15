import { useState } from 'react'
import './App.css'
import HomeComponent from './components/HomeComponent'
import DisplayInfo from './components/DisplayInfo';
import axios from 'axios';


function App() {
    const [data ,setData]=useState({})
        

    const api = (id,type) => {
        axios.get(`http://swapi.py4e.com/api/${type}/${id}`)
        .then((res)=> {
            setData(res.data);
            console.log(res.data)
        })
        .catch((err) => {
            console.error("These aren't the droids you're looking for",err);
        })
    }
  return (
    <>
        <HomeComponent luke={api} />
        <DisplayInfo data={data}/>
    </>
  )
}

export default App
