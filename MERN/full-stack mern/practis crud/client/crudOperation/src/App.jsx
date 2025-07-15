import './App.css';
import UpdateProduct from "./components/UpdateProduct";
// import ProductForm from "./components/ProductForm"; // If used in Create
// import ProductList from "./components/ProductList";  // Optional
import ProductList from "./components/HomeComponent";
import Details from "./components/Display";          // For viewing single product
import CreateProduct from "./components/CreateProduct"; // Assuming you split create logic
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="container">
        <h1>Product Manager</h1>

        <Routes>
          {/* List all products */}
          <Route path="/" element={<><ProductList /><CreateProduct /></>} />


          {/* View product details */}
          <Route path="/product/:id" element={<Details />} />

          {/* Edit product */}
          <Route path="/product/edit/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
  );
};

export default App;
