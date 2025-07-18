import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/main';
import Detail from './components/Detail';
function App() {
    return (
    <div className="App">
         <Routes>
             <Route element={<Main/>} path="/people/" />
             <Route element={<Detail/>} path="/people/:id" />
         </Routes>                         
    </div>
    );
}
export default App;
