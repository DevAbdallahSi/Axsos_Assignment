import { useState } from 'react';
import './App.css';
import DisplayBox from './components/DisplayBox';
import BoxForm from './components/BoxComponent';

function App() {
  const [boxs, setBox] = useState([]);

  const newColore = (param) => {
    setBox([...boxs, param]);  
  };

  return (
    <>
      <BoxForm addBox={newColore} />
      <DisplayBox boxs={boxs} />
    </>
  );
}

export default App;
