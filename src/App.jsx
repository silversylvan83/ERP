import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductManagement from './pages/ProductManagement/ProductManagement';
import OrderManagement from './pages/OrderManagement/OrderManagement';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/order-management" element={<OrderManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
