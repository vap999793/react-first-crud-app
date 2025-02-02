import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import AddToForm from './components/AddToForm';
import EditProduct from './components/EditProduct';
import {useState} from 'react'

function App() {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <>
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home products={{products, setProducts}} />} exact></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add-product" element={<AddToForm addProduct={addProduct} />}></Route>
          <Route path="/edit-product/:id" element={<EditProduct products={{products, setProducts}} />}></Route>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;
