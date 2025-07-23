import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import DisplayUser from './components/DisplayUser';
import UpdateUser from './components/UpdateUser';

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<><DisplayUser /></>} />
                <Route path="/create/user" element={<><CreateUser/></>} />
                <Route path="/edit/:id" element={<UpdateUser />} />
            </Routes>
        </div>
    );
};
export default App;