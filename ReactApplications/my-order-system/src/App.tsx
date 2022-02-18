import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './Components/Product/ProductDetails';
import DisplayProducts from './Components/Product/DisplayProducts';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayProducts />} />
          <Route path="/details/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
