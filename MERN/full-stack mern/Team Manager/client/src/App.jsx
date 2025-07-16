import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreatePlayer from './components/CreatePlayer';
import DisplayPlayer from './components/DisplayPlayer';
import UpdatePlayer from './components/UpdatePlayer';

const App = () => {
    return (
        <div className="container">
            <h1>Team Manager</h1>

            <Routes>
                <Route path="/" element={<><DisplayPlayer /></>} />
                <Route path="/create/player" element={<><CreatePlayer/></>} />
                <Route path="/edit/:id" element={<UpdatePlayer />} />
            </Routes>
        </div>
    );
};

export default App;
