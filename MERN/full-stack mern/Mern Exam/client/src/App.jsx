import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import DisplayInfo from './components/MemberInfo';
import UpdateUser from './components/UpdateUser';
import DisplayUser from './components/Home';

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<><DisplayUser /></>} />
                <Route path="/create/user" element={<><CreateUser /></>} />
                <Route path="/edit/:id" element={<UpdateUser />} />
                <Route element={<DisplayInfo />} path="/user/:id" />
            </Routes>
        </div>
    );
};
export default App;