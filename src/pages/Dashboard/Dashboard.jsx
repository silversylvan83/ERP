import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBox, FaChartLine, FaUsers, FaWarehouse, FaMoneyBillAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [orders] = useState([
    { id: 1, customer: 'Aniket Verma', total: 150.99, status: 'Pending' },
    { id: 2, customer: 'Priyanshu Desmukh', total: 200.50, status: 'Shipped' },
    { id: 3, customer: 'Vaishnavi Yadav', total: 75.25, status: 'Delivered' },
  ]);

  const [products] = useState([
    { id: 1, name: 'Laptop', price: 135800, quantity: 100 },
    { id: 2, name: 'Smartphone', price: 80952, quantity: 50 },
    { id: 3, name: 'Tablet', price: 180412, quantity: 75 },
  ]);

  const [sales] = useState([
    { id: 1, date: '2024-03-01', total: 1000 },
    { id: 2, date: '2024-03-02', total: 1500 },
    { id: 3, date: '2024-03-03', total: 2000 },
  ]);

  const [customers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ]);

  const [inventory] = useState([
    { id: 1, name: 'Laptop', quantity: 10 },
    { id: 2, name: 'Smartphone', quantity: 5 },
    { id: 3, name: 'Tablet', quantity: 7 },
  ]);

  const [revenue] = useState(15000);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to ERP Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/order-management">
          <div className="dashboard-card bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300">
            <FaShoppingCart className="text-blue-500 mb-2 mx-auto" size={36} />
            <h2 className="text-xl font-semibold text-center mb-2">Orders</h2>
            <p className="text-gray-600 text-center">Total Orders: {orders.length}</p>
          </div>
        </Link>

        <Link to="/product-management">
          <div className="dashboard-card bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300">
            <FaBox className="text-green-500 mb-2 mx-auto" size={36} />
            <h2 className="text-xl font-semibold text-center mb-2">Products</h2>
            <p className="text-gray-600 text-center">Total Products: {products.length}</p>
          </div>
        </Link>

        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300">
          <FaChartLine className="text-purple-500 mb-2 mx-auto" size={36} />
          <h2 className="text-xl font-semibold text-center mb-2">Sales</h2>
          <p className="text-gray-600 text-center">Total Sales: {sales.length}</p>
        </div>

        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300">
          <FaUsers className="text-yellow-500 mb-2 mx-auto" size={36} />
          <h2 className="text-xl font-semibold text-center mb-2">Customers</h2>
          <p className="text-gray-600 text-center">Total Customers: {customers.length}</p>
        </div>

        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300">
          <FaWarehouse className="text-indigo-500 mb-2 mx-auto" size={36} />
          <h2 className="text-xl font-semibold text-center mb-2">Inventory</h2>
          <p className="text-gray-600 text-center">Total Inventory: {inventory.reduce((acc, item) => acc + item.quantity, 0)}</p>
        </div>

        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300">
          <FaMoneyBillAlt className="text-red-500 mb-2 mx-auto" size={36} />
          <h2 className="text-xl font-semibold text-center mb-2">Financials</h2>
          <p className="text-gray-600 text-center">Total Revenue: ₹{revenue}</p>
        </div>
      </div>

      <footer className="text-center mt-8">
        <p>Developed by <a href="https://in.linkedin.com/in/vaishnavi-kumari-b6375b208" target="_blank" rel="noopener noreferrer" className="underline">Vaishnavi</a></p>
      </footer>
    </div>
  );
};

export default Dashboard;
