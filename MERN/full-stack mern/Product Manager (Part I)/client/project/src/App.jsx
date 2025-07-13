import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomeComponent from './components/HomeComponent'
import ProductList from './components/ProductList'
// import { Link } from 'react-router-dom';
import DsplayProduct from './components/DisplayProduct';
import Update from './components/EditProduct';


function App() {

    return (
        <>
            <Routes>
                <Route element={<><HomeComponent /> <ProductList/></>} path="/" />
                <Route element={<DsplayProduct />} path="/product/:id"/>
                <Route path="/product/edit/:id" element={<Update />} />
            </Routes>
        
        </>
    )
}

export default App
